import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import PemilikRoute from "./routes/PemilikRoute.js";
import KostRoute from "./routes/KostRoute.js";
dotenv.config();

const app = express();

(async()=>{
    await db.sync();
})();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}
));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  });

app.use(PemilikRoute);
app.use(KostRoute);

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server berjalan dengan baik bangett...');
});