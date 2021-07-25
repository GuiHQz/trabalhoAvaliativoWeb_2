import {Router} from "express"
const routes = new Router()

import Usuario from "./app/controllers/UsuarioController"
import Passageiro from "./app/controllers/PassageiroController"
import Aeronave from "./app/controllers/AeronaveController"
import Viagem from "./app/controllers/ViagemController"

routes.get("/Usuario", Usuario.index)
routes.get("/Usuario/nome/:nome", Usuario.showName)
routes.get("/Usuario/id/:id", Usuario.showId)
routes.post("/Usuario", Usuario.create)
routes.put("/Usuario", Usuario.update)

routes.get("/Passageiro", Passageiro.index)
routes.post("/Passageiro", Passageiro.create)
routes.put("/Passageiro", Passageiro.update)

routes.get("/Aeronave", Aeronave.index)
routes.post("/Aeronave", Aeronave.create)
routes.put("/Aeronave", Aeronave.update)

routes.get("/Viagem", Viagem.index)
routes.post("/Viagem", Viagem.create)
routes.put("/Viagem", Viagem.update)

export default routes