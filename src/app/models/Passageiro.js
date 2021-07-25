import Sequelize, {Model} from "sequelize"

class Passageiro extends Model{
    static init(sequelize){
        super.init(
            {
                idpassageiro: {primaryKey: true, type: Sequelize.INTEGER, autoIncrement: true},
                nome: Sequelize.STRING,
                cpf: Sequelize.STRING,
                rg: Sequelize.STRING,
                telefone: Sequelize.STRING
            },
            {
                freezeTableName: true,
                timestamps: false,
                sequelize,
            }
        )
    }
}

export default Passageiro