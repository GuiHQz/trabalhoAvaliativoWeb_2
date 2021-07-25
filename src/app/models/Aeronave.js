import Sequelize, {Model} from "sequelize"

class Aeronave extends Model{
    static init(sequelize){
        super.init(
            {
                idaeronave: {primaryKey: true, type: Sequelize.INTEGER, autoIncrement: true},
                marca: Sequelize.STRING,
                modelo: Sequelize.STRING,
                prefixo: Sequelize.STRING
            },
            {
                freezeTableName: true,
                timestamps: false,
                sequelize,
            }
        )
    }
}

export default Aeronave