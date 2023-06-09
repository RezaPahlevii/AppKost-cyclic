import Pencari from "../models/PencariModel.js";
import argon2 from "argon2";

export const getPencari = async(req, res) =>{
    try {
        const response = await Pencari.findAll({
            //menampilkan atribut yang hanya di inginkan
            attributes:['uuid','name','email','role']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getPencariById = async(req, res) =>{
    try {
        const response = await Pencari.findOne({
            attributes:['uuid','name','email','role'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const createPencari = async(req, res) =>{
    const {name, email, password, confPassword, role} = req.body;
    // console.log(req.body)
    if(password !== confPassword) return res.status(400).json({msg: "Password dan confirm pasword tidak cocok"});
    const hashPassword = await argon2.hash(password);
    try {
        await Pencari.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        });
        res.status(201).json({msg: "Regiter Berhasil"});
    } catch (error) {
        console.error(error);
        res.status(400).json({msg: "Terjadi kesalahan saat membuat akun pencari kost"});
    }
}
export const updatePencari = async(req, res) =>{
    const pencari = await Pencari.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!pencari) return res.status(404).json({msg: "User tidak ditemukan"});
    const {name, email, password, confPassword, role} = req.body;
    let hashPassword;
    if(password === "" || password === null ){
        hashPassword = pencari.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password dan confirm pasword tidak cocok"});
    try {
        await Pencari.update({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        },{
            where:{
                id: pencari.id
            }
        });
        res.status(200).json({msg: "Akun Pencari di update"});
    } catch (error) {
        console.error(error);
        res.status(400).json({msg: "Terjadi kesalahan saat membuat akun pencari"});
    }
}
export const deletePencari = async(req, res) =>{
    const pencari = await Pencari.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!pencari) return res.status(404).json({msg: "User tidak ditemukan"});
    try {
        await Pencari.destroy({
            where:{
                id: pencari.id
            }
        });
        res.status(200).json({msg: "Akun Pencari di hapus"});
    } catch (error) {
        console.error(error);
        res.status(400).json({msg: "Terjadi kesalahan saat menghapus akun pencari"});
    }
}