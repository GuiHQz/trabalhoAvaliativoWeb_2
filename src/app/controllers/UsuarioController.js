import Usuario from "../models/Usuario"

class UsuarioController {
    async index(req, res){
        try{
            const data = await Usuario.findAll({
                limit:100,
            })
            return res.json(data)
        }catch(e){
            console.log("Erro: ", e)
        }
    }

    async showName(req, res){
        try {
            const data = await Usuario.findAll({
               where:{
                   nome: req.params.nome
               }
            })
            return res.json(data)
        } catch (e) {
            console.log("Erro: ", e)
        }
    }

    async showId(req, res){
        try {
            const data = await Usuario.findOne({
                where:{
                    id: req.params.id
                }
            })
            return res.json(data)
        } catch (e) {
            console.log("Erro: ", e)
        }
    }

    async create(req, res){
        const { nome, login, senha } = req.body
        const data = Usuario.create({
            nome: nome,
            login: login,
            senha: senha
        })
        return res.json(data)
    }

    async update(req, res) {
        const {login, senha} = req.body
        const data = Usuario.update({
            senha: senha
        },
        {
            where:{
                login: login
            }
        })
        return res.json(data)
    }

}

export default new UsuarioController()