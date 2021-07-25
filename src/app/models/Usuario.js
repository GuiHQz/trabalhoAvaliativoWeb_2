import Sequelize, {Model} from "sequelize"

class Usuario extends Model{
    static init(sequelize){
        super.init(
            {
                nome: Sequelize.STRING,
                login: Sequelize.STRING,
                senha: Sequelize.STRING,
            },
            {
                freezeTableName: true,
                timestamps: false,
                sequelize, 
            }
        )
    }
}

export default Usuario