import Kost from "../models/KostModel.js";
import Pemilik from "../models/PemilikModel.js";
import { Op } from "sequelize";

 export const getKost = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Kost.findAll({
                attributes:['uuid','name','price'],
                include:[{
                    model: Pemilik,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Kost.findAll({
                attributes:['uuid','name','price'],
                where:{
                    pemilikId: req.pemilikId
                },
                include:[{
                    model: Pemilik,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.massage});
    }
 }

 export const getKostById = async(req, res)=>{
    try {
        const kost = await Kost.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!kost) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Kost.findOne({
                attributes:['uuid','name','price'],
                where:{
                    id: kost.id
                },
                include:[{
                    model: Pemilik,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Kost.findOne({
                attributes:['uuid','name','price'],
                where:{
                    [Op.and]:[{id: kost.id}, {pemilikId: req.pemilikId}]
                },
                include:[{
                    model: Pemilik,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.massage});
    }
 }

 export const createKost = async(req, res) =>{
    const  {name, price} = req.body;
    try {
        await Kost.create({
            name: name,
            price: price,
            pemilikId: req.pemilikId
        });
        res.status(201).json({msg: "Berhasil menambahkan kamar kost"});
    } catch (error) {
        res.status(500).json({msg: error.massage});
    }
 }

 export const updateKost = async(req, res) =>{
    try {
        const kost = await Kost.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!kost) return res.status(404).json({msg: "Data tidak ditemukan"});
        const  {name, price} = req.body;
        if(req.role === "admin"){
            await Kost.update({name, price},{
                where:{
                    id: kost.id
                }
            });
        }else{
            if(req.pemilikId !== kost.pemilikId) return res.status(403).json({msg: "Akses terlarang"})
            await Kost.update({name, price},{
                where:{
                    [Op.and]:[{id: kost.id}, {pemilikId: req.pemilikId}]
                }
            });
        }
        res.status(200).json({msg: "Berhasil update kost"});
    } catch (error) {
        res.status(500).json({msg: error.massage});
    }
 }

 export const deleteKost = async(req, res) =>{
    try {
        const kost = await Kost.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!kost) return res.status(404).json({msg: "Data tidak ditemukan"});
        const  {name, price} = req.body;
        if(req.role === "admin"){
            await Kost.destroy({
                where:{
                    id: kost.id
                }
            });
        }else{
            if(req.pemilikId !== kost.pemilikId) return res.status(403).json({msg: "Akses terlarang"})
            await Kost.destroy({
                where:{
                    [Op.and]:[{id: kost.id}, {pemilikId: req.pemilikId}]
                }
            });
        }
        res.status(200).json({msg: "Berhasil delete kost"});
    } catch (error) {
        res.status(500).json({msg: error.massage});
    }
 }