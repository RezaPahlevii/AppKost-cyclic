import Pemilik from "../models/PemilikModel.js";

// verifyPemilik difungsikan ketika mengakses user di wajibkan login
export const verifyPemilik = async (req, res, next)=>{
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
    res.pemilikId = pemilik.id;
    req.role = pemilik.role;
    next();
}
export const adminOnly = async (req, res, next)=>{
    const pemilik = await Pemilik.findOne({
        attributes: ['uuid','name','email','role'],
        where: {
            uuid: req.session.pemilikId
        }
    });
    if(!pemilik) return res.status(404).json({msg: "User tidak ditemukan"});
    if(pemilik.role !== "admin") return res.status(403).json({msg: "Akses terlarang"});
    next();
}