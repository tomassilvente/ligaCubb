import { NextResponse } from "next/server";
import { connection } from "../../../libs/db";

export async function GET(){
    const teams = (await connection).query('SELECT * FROM equipos')
    return NextResponse.json((await teams)[0])
}

export async function POST(request) {
    try {
    const data = await request.json()
    console.log(data)
    let res = (await connection).query(`
        INSERT INTO equipos SET
            equipo =?,
            categoria =?,
            zona =?,
            logo =?,
            puntos =?,
            partidosJugados =?,
            partidosGanados =?,
            partidosEmpatados =?,
            partidosPerdidos =?,
            golesFavor =?,
            golesContra =?`, 
        [data.equipo,data.categoria,data.zona,data.logo,data.puntos,data.partidosJugados,data.partidosGanados,data.partidosEmpatados,data.partidosPerdidos,data.golesFavor,data.golesContra])
  
      return NextResponse.json({
        res
      });
      
    } catch (error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
