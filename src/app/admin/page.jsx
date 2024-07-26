import React from 'react';

export default function Admin(){
  return (
    <div className="text-white container mx-auto px-4 py-8">
        <h2 className="text-center text-2xl mb-8 font-semibold">(Administración de fechas)</h2>
        <div className='grid grid-cols-2 place-items-center gap-y-[50px] mt-[50px]'>
            <a className='text-4xl py-[40px] w-[400px] text-center bg-[#eeeeee4c] hover:bg-[#eeeeee6e] rounded-2xl shadow-md transition-all duration-300' href='admin/nuevoEquipo'>Agregar Equipo</a>
            <a className='text-4xl py-[40px] w-[400px] text-center bg-[#eeeeee4c] hover:bg-[#eeeeee6e] rounded-2xl shadow-md transition-all duration-300' href='admin/nuevaFecha'>Agregar Fecha</a>
            <a className='text-4xl py-[40px] w-[400px] text-center bg-[#eeeeee4c] hover:bg-[#eeeeee6e] rounded-2xl shadow-md transition-all duration-300' href='admin/equipos'>Ver Equipos</a>
            <a className='text-4xl py-[40px] w-[400px] text-center bg-[#eeeeee4c] hover:bg-[#eeeeee6e] rounded-2xl shadow-md transition-all duration-300' href='admin/fechas'>Ver Fechas</a>
        </div>
    </div>
  );
}