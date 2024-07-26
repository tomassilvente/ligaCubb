import { NextResponse } from "next/server";
import { connection } from "../../../libs/db";

export async function GET(){
    const teams = (await connection).query('SELECT * FROM fechas')
    return NextResponse.json((await teams)[0])
}

export async function POST(request) {
    try {
      const data = await request.json()
      console.log(data)
      let res = (await connection).query(`
          INSERT INTO fechas
          SET fecha =?,
              dia =?,
              horario =?,
              cancha =?,
              categoria =?,
              equipo1 =?,
              equipo2 =?,
              golesEquipo1 =?,
              golesEquipo2 =?,
              autoresEquipo1 =?,
              AutoresEquipo2 =?,
              logoEquipo1 =?,
              logoEquipo2 =?`, 
          [data.fecha,data.dia,data.horario,data.cancha,data.categoria,data.equipo1,data.equipo2,data.golesEquipo1,data.golesEquipo2,data.autoresEquipo1,data.autoresEquipo2,data.logoEquipo1,data.logoEquipo2])
  
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