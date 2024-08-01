import { connection } from "../../../../libs/db";
import { NextResponse } from "next/server";

export async function GET(request, context){
    const {params} = context
    let equipo = (await connection).query('SELECT * FROM equipos WHERE id = ?;', [params.id])
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
        WHERE id = ? `, 
        [data.equipo,data.categoria,data.zona,data.logo,data.puntos,data.partidosJugados,data.partidosGanados,data.partidosEmpatados,data.partidosPerdidos,data.golesFavor,data.golesContra,data.id])

    return NextResponse.json(res)
}
export async function DELETE(context, request){
    
    const { params } = await request // Extraer el cuerpo de la solicitud

        const res = (await connection).query(
            `DELETE FROM equipos WHERE id = ?`,
            [params.id]
        );


    return NextResponse.json(res)
}