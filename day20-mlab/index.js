let express = require ('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
require('./config/config');

let app = express();
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
	next();
});
app.use(bodyParser.json());

let JejakPeserta = require("./JejakPeserta/JejakPesertaRoute.js");
app.use("/api", JejakPeserta);

let KegiatanPeserta = require("./KegiatanPeserta/KegiatanPesertaRoute.js");
app.use("/api", KegiatanPeserta);

let KegiatanPesertaRinci = require("./KegiatanPesertaRinci/KegiatanPesertaRinciRoute.js");
app.use("/api", KegiatanPesertaRinci);

//mongoose.connect("mongodb://localhost:27017/DBPelatihan");
app.listen(8820);