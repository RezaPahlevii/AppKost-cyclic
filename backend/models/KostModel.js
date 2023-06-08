import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Pemilik from "./PemilikModel.js";

const {DataTypes} = Sequelize;
const Kost = db.define('kost',{
   uuid:{
       type: DataTypes.STRING,
       defaultValue: DataTypes.UUIDV4,
       allowNull: false,
       validate:{
           notEmpty: true
       }
   },
   name:{
       type: DataTypes.STRING,
       allowNull: false,
       validate:{
           notEmpty: true,
           len: [3, 100]
       }
   },
   price:{
       type: DataTypes.INTEGER,
       allowNull: false,
       validate:{
           notEmpty: true,
       }
   },
   pemilikId:{
       type: DataTypes.INTEGER,
       allowNull: false,
       validate:{
           notEmpty: true,
       }
   },
},
{
freezeTableName: true
});

Pemilik.hasMany(Kost);
Kost.belongsTo(Pemilik, {foreignKey: 'pemilikId'});

export default Kost;