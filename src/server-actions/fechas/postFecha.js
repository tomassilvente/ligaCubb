import axios from 'axios'
import { updateEquipo } from '../equipos/updateEquipo';
import { getEquipo } from '../equipos/getEquipo';

export const postFecha = async (formData) => {
    try {
        const response = await axios.post("/api/fechas", formData, {});
        if (response) {
            let equipoGanador = ''
            formData.golesEquipo1 > formData.golesEquipo2 
                ? equipoGanador = formData.equipo1 
                : formData.golesEquipo2 > formData.golesEquipo1
                ? equipo1 = formData.equipo2
                : equipoGanador = ''

            let equipo1 = await getEquipo(formData.equipo1)
                equipo1.puntos = (equipoGanador === formData.equipo1 ? parseInt(equipo1.puntos) + 3 : equipoGanador === '' ? parseInt(equipo1.puntos) + 1 : parseInt(equipo1.puntos))
                equipo1.golesFavor = parseInt(equipo1.golesFavor) + parseInt(formData.golesEquipo1)
                equipo1.golesContra = parseInt(equipo1.golesContra) + parseInt(formData.golesEquipo2)
                equipo1.partidosJugados = parseInt(equipo1.partidosJugados) +1
                equipo1.partidosGanados = (equipoGanador == formData.equipo1 ? parseInt(equipo1.partidosGanados) +1 : parseInt(equipo1.partidosGanados))
                equipo1.partidosPerdidos = (equipoGanador == formData.equipo2 ? parseInt(equipo1.partidosPerdidos) +1 : parseInt(equipo1.partidosPerdidos))
                equipo1.partidosEmpatados = (equipoGanador !== (formData.equipo2 || formData.equipo1 ) ? parseInt(equipo1.partidosEmpatados) + 1 : parseInt(equipo1.partidosEmpatados))
            
            let resultado1 = await updateEquipo(equipo1)
            console.log(resultado1)

            let equipo2 = await getEquipo(formData.equipo2)
            console.log(equipo2)
                equipo2.puntos = (equipoGanador === formData.equipo2 ? parseInt(equipo2.puntos) + 3 : equipoGanador === '' ? parseInt(equipo2.puntos) + 1 : parseInt(equipo2.puntos))
                equipo2.golesFavor = parseInt(equipo2.golesFavor) + parseInt(formData.golesEquipo2)
                equipo2.golesContra = parseInt(equipo2.golesContra) + parseInt(formData.golesEquipo2)
                equipo2.partidosJugados = parseInt(equipo2.partidosJugados) +1
                equipo2.partidosGanados = (equipoGanador == formData.equipo2 ? parseInt(equipo2.partidosGanados) +1 : parseInt(equipo2.partidosGanados))
                equipo2.partidosPerdidos = (equipoGanador == formData.equipo1 ? parseInt(equipo2.partidosPerdidos) +1 : parseInt(equipo2.partidosPerdidos))
                equipo2.partidosEmpatados = (equipoGanador !== (formData.equipo1 || formData.equipo2 ) ? parseInt(equipo2.partidosEmpatados) + 1 : parseInt(equipo2.partidosEmpatados))
            
            let resultado2 = await updateEquipo(equipo2)

            console.log(resultado2)
            return response
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}