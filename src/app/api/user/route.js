'use server'
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";
import { connection } from "../../../libs/db";


import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

export async function POST(req, res) {

    const { email, password } = await req.json();

    try {
        // Buscar el usuario en la base de datos
        const rows = (await connection).query('SELECT * FROM users WHERE email = ?', [email]);

        let users = (await rows)[0]

        if (users.length === 0) {
            return NextResponse.json(
                {
                  message: 'Usuario/Contraseña incorrectos'
                },
                {
                  status: 403,
                })
        }

        const user = users[0];

        // Verificar la contraseña
        const isValidPassword = await bcrypt.compare(password, user.password);
        console.log(isValidPassword)

        if (isValidPassword) {

            const token = jwt.sign(
                {
                email: user.email,
                },
                'LigaUser Cookie',
                { expiresIn: '12h' }
            );

            cookies().set({
              name: 'LigaUser Cookie',
              value: token,
              httpOnly: true,
              maxAge: 60 * 720
            })

            return NextResponse.json(
                {
                  message: 'Login Successful'
                },
                {
                  status: 200,
                }
            )
        }
        else return NextResponse.json(
            {
              message: 'Usuario/Contraseña incorrectos'
            },
            {
              status: 401,
            }
          );
        // Si las credenciales son válidas, devolver una respuesta exitosa
    } catch (error) {
        return NextResponse.json(
            {
              message: 'Algo salió mal', error: error.message 
            },
            {
              status: 500,
            }
        )
    }
}


export async function GET(){
    const teams = (await connection).query('SELECT * FROM users')
    return NextResponse.json((await teams)[0])
}