// SERVIDOR CON FRAMEWORK EXPRESS
const {conn} = require("./DB_connection")
const cors = require("cors")
const express = require("express")
const morgan = require("morgan")
const router = require("./routes/index")
const PORT = 3001

const server = express()

server.use(morgan("dev"))
server.use(cors())
 server.use(express.json())
 server.use("/rickandmorty", router)




conn.sync({force: false}).then(()=>{
    console.log("Base de datos conectada con exito")
server.listen(PORT, ()=>{
    console.log("Servidor activo con express en el port " + PORT)
})
}).catch((error)=> console.log(error))














// SERVIDOR CON NODE.JS

// const http = require("http")
// const getCharById = require("./controllers/getCharById.js")

// http.createServer((req, res)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     const url = req.url

//     if (url.includes("/rickandmorty/character")) {
//         let id = Number(url.split("/").pop())
//         getCharById(res, id)
//     }

   
// }).listen(3001, "localhost")

