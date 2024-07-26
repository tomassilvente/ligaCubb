import { connection } from "../../../../libs/db";
import { NextResponse } from "next/server";

export async function GET(request, context){
    const {params} = context
    let fecha = (await connection).query('SELECT * FROM fechas WHERE id = ?;', [params.id])
    if((await fecha)[0][0]){
        fecha = (await fecha)[0][0]
    }
    else fecha = fecha[0]

    return NextResponse.json(fecha)
}

export async function PUT(request){

    const data = await request.json()
    console.log(data)
    let res = (await connection).query(`
        UPDATE fechas 
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
            logoEquipo2 =?
        WHERE id = ?`, 
        [data.fecha,data.dia,data.horario,data.cancha,data.categoria,data.equipo1,data.equipo2,data.golesEquipo1,data.golesEquipo2,data.autoresEquipo1,data.autoresEquipo2,data.logoEquipo1,data.logoEquipo2,data.id])

    return NextResponse.json(res)
}


export async function DELETE(context, request){
    
    const {params} = await request

    let res = (await connection).query(`DELETE FROM fechas WHERE id = ? `,[parseInt(params.id)])

    return NextResponse.json(res)
}