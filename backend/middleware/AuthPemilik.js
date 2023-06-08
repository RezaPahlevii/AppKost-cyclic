import Pemilik from "../models/PemilikModel.js";

// fuction proteksi pemilik kost
export const verifyPemilik = async (req, res, next) =>{
    if(!req.session.pemilikId){
        return res.status(401).json({msg: "Mohon login ke akun anda!"});
    }
    const pemilik = await Pemilik.findOne({
        where: {
            // cari data pemilik kost berdasarkan uuid
            uuid: req.session.pemilikId
        }
    });
    if(!pemilik) return res.status(404).json({msg: "Akun Pemilik Kost tidak ditemukan"});
    req.pemilikId = pemilik.id;
    req.role = pemilik.role;
    next();
}

// fuction proteksi pemilik kost, hanya admin dapat melakukan
export const adminOnly = async (req, res, next) =>{
    if(!req.session.pemilikId){
        return res.status(401).json({msg: "Mohon login ke akun anda!"});
    }
    const pemilik = await Pemilik.findOne({
        where: {
            // cari data pemilik kost berdasarkan uuid
            uuid: req.session.pemilikId
        }
    });
    if(!pemilik) return res.status(404).json({msg: "Akun Pemilik Kost tidak ditemukan"});
    if(pemilik.role !== "admin") return res.status(403).json({msg: "Akses terlarang"});
    next();
}