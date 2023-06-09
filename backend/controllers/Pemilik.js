import Pemilik from "../models/PemilikModel.js";
import argon2 from "argon2";

export const getPemilik = async(req, res) =>{
    try {
        const response = await Pemilik.findAll({
            //menampilkan atribut yang hanya di inginkan
            attributes:['uuid','name','email','role']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getPemilikById = async(req, res) =>{
    try {
        const response = await Pemilik.findOne({
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
export const createPemilik = async(req, res) =>{
    const {name, email, password, confPassword, role} = req.body;
    // console.log(req.body)
    if(password !== confPassword) return res.status(400).json({msg: "Password dan confirm pasword tidak cocok"});
    const hashPassword = await argon2.hash(password);
    try {
        await Pemilik.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        });
        res.status(201).json({msg: "Regiter Berhasil"});
    } catch (error) {
        console.error(error);
        res.status(400).json({msg: "Terjadi kesalahan saat membuat akun pemilik"});
    }
}
export const updatePemilik = async(req, res) =>{
    const pemilik = await Pemilik.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!pemilik) return res.status(404).json({msg: "User tidak ditemukan"});
    const {name, email, password, confPassword, role} = req.body;
    let hashPassword;
    if(password === "" || password === null ){
        hashPassword = pemilik.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password dan confirm pasword tidak cocok"});
    try {
        await Pemilik.update({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        },{
            where:{
                id: pemilik.id
            }
        });
        res.status(200).json({msg: "Akun Pemilik di update"});
    } catch (error) {
        console.error(error);
        res.status(400).json({msg: "Terjadi kesalahan saat membuat akun pemilik"});
    }
}
export const deletePemilik = async(req, res) =>{
    const response = await Pemilik.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    try {
        await Pemilik.destroy({
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "Akun Pemilik di hapus"});
    } catch (error) {
        console.error(error);
        res.status(400).json({msg: "Terjadi kesalahan saat membuat akun pemilik"});
    }
}