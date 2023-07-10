const http = require('http')
const  url = require('url')
const porta = 3000
const fs  = require ('fs')
const path = require('path')



//         //QUESTÃO 1
// const server = http.createServer((req,res)=>{
//     const objeto = [
//         {
//                 id: 1, 
//                 nome: "carlos",
//         },
//         {
//                 id: 2, 
//                 nome: "lethìcia",
//         },
//         {
//                 id: 3, 
//                 nome: "Bruno",
//         }
//     ]
//     if(req.url === '/info'){
//         res.writeHead(200, {'content-Type':'application/json; charset-utf8'})
//         res.end(JSON.stringify(objeto))
//     }
// })
// server.listen(porta,()=>{
//     console.log(`porta ${porta}`)
// })






    
    //              //QUESTÃO 2
    // const enredesso = "https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf"
    // const retorno = [
    //     {
    //         rot :"",
    //         dir: path.dirname(enredesso),
    //         base: path.basename(enredesso),
    //         ext: path.extname(enredesso),
    //         nOme: path.basename(enredesso, path.extname(enredesso))
    //     }
    // ]
    // console.log(retorno)


//          // QUESTÃO 4   
// fs.appendFile('arquivo.txt', 'nada', (err)=>{

//   if(err){
//      console.log(err)
//     }
//     console.log("criou")

//   })
//   fs.rename('arquivo.txt','renomeado.txt' ,(err)=>{
//    if(err){
//      console.log(err)
//      return
//     }
//     console.log('renomado')
//     })



//         //QUESTÃO 5
// const os  = require('os')
// console.log(os.cpus())



















