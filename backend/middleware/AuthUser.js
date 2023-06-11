import User from "../models/UserModel.js";

// fuction proteksi user
export const verifyUser = async (req, res, next) =>{
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun anda!"});
    }
    const user = await User.findOne({
        where: {
            // cari data user berdasarkan uuid
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    req.userId = user.id;
    req.role = user.role;
    next();
}

// fuction proteksi user, hanya admin dapat melakukan
export const adminOnly = async (req, res, next) =>{
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun anda!"});
    }
    const user = await User.findOne({
        where: {
            // cari data user berdasarkan uuid
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    if(user.role !== "admin") return res.status(403).json({msg: "Akses terlarang"});
    next();
}