'use client';
// Hooks
import { useEffect, useState } from 'react';
// Components
import { Fecha } from './Fecha';
import { TableFiltering } from './TableFiltering';
// Server Actions
import { getEquipos } from '../../server-actions/equipos/getEquipos';

export const Tabla = () => {
    // Equipos
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchEquipos = async () => {
            const equipos = await getEquipos();
            if (equipos) setData(equipos);
        };
        fetchEquipos();
    }, []);

    // Categorías
    const categorias = ['A', 'B', 'C', 'D', 'E', 'FEMA', 'FEMB', 'FEMC'];
    const [category, setCategory] = useState('A');

    const handleCategory = (cat) => {
        setCategory(cat);
        setZona(1);
    };

    let zonas = [1, 2, 3, 4];
    const [zona, setZona] = useState(1);

    if (category === 'FEMC') zonas = [1, 2, 3];

    const handleZona = (zon) => {
        setZona(zon);
    };

    return (
        <div className="relative z-10 text-center  bg-opacity-75 min-h-screen">
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-4 pt-[30px]">
                {categorias.map((cat) => (
                    <button
                        onClick={() => handleCategory(cat)}
                        key={cat}
                        className="text-white bg-red-600 mx-2 px-4 py-2 h-10 rounded-xl transition-transform transform hover:scale-105 hover:bg-red-700 shadow-lg animate__animated animate__bounceInUp"
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div suppressHydrationWarning={true} className={`${data.length === 0 ? 'hidden' : 'flex'} justify-center text-black py-[30px]`}>
                {category !== 'E' && category !== 'FEMC' ? (
                    <TableFiltering data={data} category={category} zona={1} />
                ) : (
                    <div>
                        {category === 'FEMC' && zona === 4 ? (
                            <div className="h-[700px]"></div>
                        ) : (
                            <div className="m-5 pb-[75px]" key={zona}>
                                <div className="flex flex-wrap justify-center gap-x-2 gap-y-4">
                                    {zonas.map((zona) => (
                                        <button
                                            onClick={() => handleZona(zona)}
                                            key={zona}
                                            className="text-black bg-white m-2 px-4 py-2 h-10 rounded-xl transition-transform transform hover:scale-105 hover:bg-gray-200 shadow-lg mb-12"
                                        >
                                            {zona}
                                        </button>
                                    ))}
                                </div>
                                <h2 className="text-center text-white text-5xl my-[25px]">Zona {zona}</h2>
                                <TableFiltering data={data} category={category} zona={zona} />
                            </div>
                        )}
                    </div>
                )}
            </div>
            <Fecha cat={category} />
        </div>
    );
};
