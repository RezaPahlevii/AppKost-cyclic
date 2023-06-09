import Pemilik from "../models/PemilikModel.js";
import argon2 from "argon2";

export const Login = async (req, res)=>{
    const pemilik = await Pemilik.findOne({
        where: {
            email: req.body.email
        }
    });
    if(!pemilik) return res.status(404).json({msg: "User tidak ditemukan"});
    const match = await argon2.verify(pemilik.password, req.body.password);
    if(!match) return res.status(400).json({msg: "Password bermasalah"});
    req.session.pemilikId = pemilik.uuid;
    const uuid = pemilik.uuid;
    const name = pemilik.name;
    const email = pemilik.email;
    const role = pemilik.role;
    res.status(200).json({uuid, name, email, role});
}

export const Me = async(req, res)=>{
    if(!req.session.pemilikId){
        return res.status(401).json({msg: "Mohon login ke akun anda!"});
    }
    const pemilik = await Pemilik.findOne({
        attributes: ['uuid','name','email','role'],
        where: {
            uuid: req.session.pemilikId
        }
    });
    if(!pemilik) return res.status(404).json({msg: "User tidak ditemukan"});
    res.status(200).json(pemilik);
}

export const logOut = (req, res)=>{
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg: "Tidak daapat"});
        res.status(200).json({msg: "Anda telah logout"});
    });
}