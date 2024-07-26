import { connection } from "../../../../libs/db";
import { NextResponse } from "next/server";

export async function GET(request, context){
    const {params} = context
    let equipo = (await connection).query('SELECT * FROM equipos WHERE equipo = ?;', [params.name])
    if((await equipo)[0][0]){
        equipo = (await equipo)[0][0]
        console.log(equipo)
    }
    else equipo = equipo[0]

    return NextResponse.json(equipo)
}

export async function PUT(request){

    const data = await request.json()
    console.log(data)
    let res = (await connection).query(`
        UPDATE equipos 
        SET equipo =?,
            categoria =?,
            zona =?,
            logo =?,
            puntos =?,
            partidosJugados =?,
            partidosGanados =?,
            partidosEmpatados =?,
            partidosPerdidos =?,
            golesFavor =?,
            golesContra =?
        WHERE equipo = ? AND categoria = ? `, 
        [data.equipo,data.categoria,data.zona,data.logo,data.puntos,data.partidosJugados,data.partidosGanados,data.partidosEmpatados,data.partidosPerdidos,data.golesFavor,data.golesContra,data.equipo,data.categoria])

    return NextResponse.json(res)
}
export async function DELETE(request){
    
    const { equipo, categoria } = await request.json() // Extraer el cuerpo de la solicitud
        console.log(equipo, categoria);

        const res = (await connection).query(
            `DELETE FROM equipos WHERE equipo = ? AND categoria = ?`,
            [equipo, categoria]
        );


    return NextResponse.json(res)
}