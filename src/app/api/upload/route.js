import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'
import { v2 as cloudinary } from 'cloudinary';
import path from 'path'

export async function POST(request){

    const data = await request.formData()
    console.log(data.get('file'))

    const image = data.get('file')

    if(!image){
        return NextResponse.json({
            status: 400,
            message: "Imagen no encontrada"
        })
    }

    const bytes = await image.arrayBuffer()
    console.log(bytes)
    const buffer = Buffer.from(bytes)

    //Guardar en public/logos
    const filePath = path.join(process.cwd(), 'public/logos', image.name)

    await writeFile(filePath, buffer)


    cloudinary.config({
    cloud_name: 'dgs3my0h4',
    api_key: '728714138724513',
    api_secret: 'XttfGuZz77rzEIKMezwHvLR_ubQ'
    });

    const response = await cloudinary.uploader.upload(filePath)

    return NextResponse.json({
        status: 200,
        message: "Imagen Subida",
        url: response.secure_url
    })
}