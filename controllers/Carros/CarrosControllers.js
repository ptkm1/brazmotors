const Carros = require('../../models/Carros/CarrosModel')
const Marcas = require('../../models/Marcas/MarcasModel')
const CarrosViews = require('../../views/Carros/CarrosViews')
module.exports = {

    async FindAll(Request,Response){
       const carros = await Carros.find({}).limit(10)
    return Response.json(await CarrosViews.Render(carros))    
    },
    async FindById(Request,Response){
        const Carro = await Carros.find({_id: Request.params.id}).limit(10)
    return  Response.json(await CarrosViews.Render(Carro))       
    },
    async Find_Cor(Request,Response){
    },
    async Find_Marca(Request,Response){
    }
}