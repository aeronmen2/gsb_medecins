const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');


app.use(express.json());
app.use(cors({
        origin:["http://localhost:3000"],
        methods :["GET", "POST"],
        credentials: true,
    })
);

app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
        key: "admin",
        secret: "mdp",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60*60*24*1000
        },
    })
);

const getConnection = async () => {
    const db = await mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "medecin",
    });
    return db;
}

console.log('ca fonctionne');

app.get('/medecins', async (req, res) => {
 try{
    const db = await getConnection();
    const medecins = await db.query("SELECT medecin.id, nom, prenom, adresse, tel, specialiteComplementaire, libelle FROM medecin, departement WHERE medecin.departement = departement.id order by medecin.id; ");
     res.send(medecins);
 }catch(error){
     console.log("erreur")
 };
});

app.post('/medecininfo', async (req,res) =>{
    try{
        const db = await getConnection();
        const idMedecin = req.body.idMedecin;
        const medecin = await db.query("SELECT * FROM medecin where id = ?", idMedecin);
        res.send(medecin);
    }catch(error){
    console.log("erreur")
};
});

app.get('/departement', async (req, res) => {
    try{
       const db = await getConnection();
       const departement = await db.query("SELECT * FROM departement");
        res.send(departement);
    }catch(error){
        console.log("erreur")
    };
   });



app.listen("3001", () => {
    console.log("running on port 3001")
})