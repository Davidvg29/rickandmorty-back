const app = require("../src/app")
const session = require("supertest")
const agent = session(app)

describe("Test de Rutas",()=>{

})

describe("GET /rickandmorty/character/:id",()=>{
    it("Responde con status: 200", ()=>{
        await agent.get('/rickandmorty/character/1').expect(200)
    })
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', ()=>{
        
    })
})