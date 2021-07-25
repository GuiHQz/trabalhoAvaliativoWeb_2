import Aeronave from "../models/Aeronave"

class AeronaveController{
    async index(req, res){
        try{
            const data = await Aeronave.findAll({
                limit:100,
            })
            return res.json(data)
        }catch(e){
            console.log("Erro: ", e)
        }
    }

    async create(req, res){
        const { marca, modelo, prefixo } = req.body
        const data = Aeronave.create({
            marca: marca,
            modelo: modelo,
            prefixo: prefixo
        })
        return res.json(data)
    }

    async update(req, res) {
        const {idaeronave, prefixo} = req.body
        const data = Aeronave.update({
            prefixo: prefixo
        },
        {
            where:{
                idaeronave: idaeronave
            }
        })
        return res.json(data)
    }
}

export default new AeronaveController()