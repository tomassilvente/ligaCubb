import React from 'react';

export default function Admin(){
  return (
    <div className="text-white container mx-auto px-[10%] md:px-4 py-8">
        <h2 className="text-center text-2xl mb-8 font-semibold">(Administración de fechas)</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <a className='text-2xl py-8 w-full text-center bg-white text-red-700 hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300' href='/admin/nuevoEquipo'>Agregar Equipo</a>
            <a className='text-2xl py-8 w-full text-center bg-white text-red-700 hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300' href='/admin/nuevaFecha'>Agregar Fecha</a>
            <a className='text-2xl py-8 w-full text-center bg-white text-red-700 hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300' href='/admin/equipos'>Ver Equipos</a>
            <a className='text-2xl py-8 w-full text-center bg-white text-red-700 hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300' href='/admin/fechas'>Ver Fechas</a>
        </div>
    </div>
  );
}