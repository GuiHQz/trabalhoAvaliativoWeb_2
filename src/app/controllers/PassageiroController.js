import Passageiro from "../models/Passageiro"

class PassageiroController{

    async index(req, res){
        try{
            const data = await Passageiro.findAll({
                limit:100,
            })
            return res.json(data)
        }catch(e){
            console.log("Erro: ", e)
        }
    }

    async create(req, res){
        const { nome, cpf, rg, telefone } = req.body
        const data = Passageiro.create({
            nome: nome,
            cpf: cpf,
            rg: rg,
            telefone: telefone
        })
        return res.json(data)
    }

    async update(req, res) {
        const {cpf, telefone} = req.body
        const data = Passageiro.update({
            telefone: telefone
        },
        {
            where:{
                cpf: cpf
            }
        })
        return res.json(data)
    }
}

export default new PassageiroController()