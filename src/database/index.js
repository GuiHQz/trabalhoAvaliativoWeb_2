import Sequelize from "sequelize"
import config from "../config/database"
import Usuario from "../app/models/Usuario"
import Passageiro from "../app/models/Passageiro"
import Aeronave from "../app/models/Aeronave"
import Viagem from "../app/models/Viagem"

const models = [Usuario, Passageiro, Aeronave, Viagem]

class Database{
    constructor(){
        this.connection = new Sequelize(config)
        this.init()
    }

    init(){
        models.forEach(model => model.init(this.connection))
    }
}

export default new Database()