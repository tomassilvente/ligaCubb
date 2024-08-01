'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';

export default function RootLayout({ children }) {

  const [isOpen, setIsOpen] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        await axios.get('/api/auth');
        setIsAuthenticated(true);
      } catch (error) {
        router.push('/login');
      }
    }

    checkAuth();
  }, [router]);

  if (!isAuthenticated) {
    return <div className='h-screen text-xl'>Loading...</div>;
  }

  const handleLogout = async () => {
    await axios.post('/api/user/logout');
    router.push('/login');
  };

    return (

        <div>
          <nav className="bg-gray-200 mb-12 fixed w-full shadow-2xl h-[60px] z-50">
            <div className="flex justify-between items-center h-full pr-[10px]">
              <Link href="/">
                <Image alt='ligaCubb' width={205} height={60} src={'/logos/logocubb.png'} />
              </Link >
              <div className="hidden lg:flex mt-[15px] space-x-8 text-black justify-center text-xl mb-[10px]">
                <Link href='/admin' className='hover:text-red-600 transition-colors duration-300 '>Admin</Link >
                <Link href='/admin/fechas' className='hover:text-red-600 transition-colors duration-300'>Fechas</Link >
                <Link href='/admin/nuevaFecha' className='hover:text-red-600 transition-colors duration-300'>Nueva Fecha</Link >
                <Link href='/admin/equipos' className='hover:text-red-600 transition-colors duration-300'>Equipos</Link >
                <Link href='/admin/nuevoEquipo' className='hover:text-red-600 transition-colors duration-300'>Nuevo Equipo</Link >
                <button onClick={handleLogout} className='text-red-600 hover:text-red-400 transition-colors duration-300'>
                  Cerrar Sesión
                </button>
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
                <Link href='/admin' className='block hover:text-red-600 transition-colors duration-300'>Admin</Link >
                <Link href='/admin/fechas' className='block hover:text-red-600 transition-colors duration-300'>Fechas</Link >
                <Link href='/admin/nuevaFecha' className='block hover:text-red-600 transition-colors duration-300'>Nueva Fecha</Link >
                <Link href='/admin/equipos' className='block hover:text-red-600 transition-colors duration-300'>Equipos</Link >
                <Link href='/admin/nuevoEquipo' className='block hover:text-red-600 transition-colors duration-300'>Nuevo Equipo</Link >
                <button onClick={handleLogout} className='text-red-600 hover:text-red-400 transition-colors duration-300'>
                  Cerrar Sesión
                </button>
              </div>
            )}
          </nav>
          <div className="pt-[125px] text-white min-h-screen">
              <h1 className="text-center text-4xl"> Liga Universitaria Bahia Blanca </h1>
              {children}
          </div>
        </div>
    );
  }
