import "./database"

import Usuario from "./app/models/Usuario"
import Passageiro from "./app/models/Passageiro"
import Viagem from "./app/models/Viagem"
import Aeronave from "./app/models/Aeronave"

class playground{
    static async play(){
        const Avioes = await Aeronave.findAll({
            where:{
                marca: "Embraer"
            }
        })

        console.log(JSON.stringify(Avioes))
    }
}

playground.play()