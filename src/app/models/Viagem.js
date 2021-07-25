import Sequelize, {Model} from "sequelize"

class Viagem extends Model{
    static init(sequelize){
        super.init(
            {
                idviagem: {primaryKey: true, type: Sequelize.INTEGER, autoIncrement: true},
                dataviagem: Sequelize.STRING,
                horapartida: Sequelize.STRING,
                origem: Sequelize.STRING,
                destino: Sequelize.STRING
            },
            {
                freezeTableName: true,
                timestamps: false,
                sequelize,
            }
        )
    }
}

export default Viagem