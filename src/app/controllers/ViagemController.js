import Viagem from "../models/Viagem"

class ViagemController{
    async index(req, res){
        try{
            const data = await Viagem.findAll({
                limit:100,
            })
            return res.json(data)
        }catch(e){
            console.log("Erro: ", e)
        }
    }

    async create(req, res){
        const { dataviagem, horapartida, origem, destino } = req.body
        const data = Viagem.create({
            dataviagem: dataviagem,
            horapartida: horapartida,
            origem: origem,
            destino: destino
        })
        return res.json(data)
    }

    async update(req, res) {
        const {horapartida, origem, destino} = req.body
        const data = Viagem.update({
            horapartida: horapartida
        },
        {
            where:{
                origem: origem,
                destino: destino
            }
        })
        return res.json(data)
    }
}

export default new ViagemController()