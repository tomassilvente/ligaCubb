'use client'
import { useState } from 'react';
import Image from "next/image";

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <html lang="en">
        <body>
          <nav className="bg-gray-200 mb-12 fixed w-full shadow-2xl h-[60px] z-50">
            <div className="flex justify-between items-center h-full pr-[10px]">
              <a href="/">
                <Image alt='ligaCubb' width={205} height={60} src={'/logos/logocubb.png'} />
              </a>
              <div className="hidden lg:flex mt-[15px] space-x-8 text-black justify-center text-xl mb-[10px]">
                <a href='/admin' className='hover:text-red-600 transition-colors duration-300 '>Admin</a>
                <a href='/admin/fechas' className='hover:text-red-600 transition-colors duration-300'>Fechas</a>
                <a href='/admin/nuevaFecha' className='hover:text-red-600 transition-colors duration-300'>Nueva Fecha</a>
                <a href='/admin/equipos' className='hover:text-red-600 transition-colors duration-300'>Equipos</a>
                <a href='/admin/nuevoEquipo' className='hover:text-red-600 transition-colors duration-300'>Nuevo Equipo</a>
              </div>
              <div className="lg:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            {isOpen && (
              <div className="lg:hidden bg-gray-200 px-4 py-2 space-y-2">
                <a href='/admin' className='block hover:text-red-600 transition-colors duration-300'>Admin</a>
                <a href='/admin/fechas' className='block hover:text-red-600 transition-colors duration-300'>Fechas</a>
                <a href='/admin/nuevaFecha' className='block hover:text-red-600 transition-colors duration-300'>Nueva Fecha</a>
                <a href='/admin/equipos' className='block hover:text-red-600 transition-colors duration-300'>Equipos</a>
                <a href='/admin/nuevoEquipo' className='block hover:text-red-600 transition-colors duration-300'>Nuevo Equipo</a>
              </div>
            )}
          </nav>
          <div className="pt-[125px] text-white min-h-screen">
              <h1 className="text-center text-4xl"> Liga Universitaria Bahia Blanca </h1>
              {children}
          </div>
        </body>
      </html>
    );
  }
