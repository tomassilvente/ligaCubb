import Image from 'next/image';

export const ResultadoTabla = ({ fecha }) => {
    return (
        <>
            <tr className="text-lg" key={fecha.id}>
                <td className="w-1/6 bg-red-700 text-white">
                    <p className="py-1">{fecha.dia}</p>
                    <p className="py-1">{fecha.horario}</p>
                    <p className="py-1">{fecha.cancha}</p>
                </td>
                <td className="w-1/3 py-2">
                    <div className="flex justify-center">
                        <Image width={50} height={50} alt={fecha.equipo1} className="mx-5" src={fecha.logoEquipo1} />
                    </div>
                    {fecha.equipo1}
                </td>
                <td className="w-1/8 text-4xl">{fecha.golesEquipo1}</td>
                <td className="w-1/8 text-4xl">{fecha.golesEquipo2}</td>
                <td className="w-1/3">
                    <div className="flex justify-center">
                        <Image width={50} height={50} alt={fecha.equipo2} className="mx-5" src={fecha.logoEquipo2} />
                    </div>
                    {fecha.equipo2}
                </td>
            </tr>
            <tr className="bg-gray-100">
                <td className="w-1/6">Goles ⚽️</td>
                <td className="w-1/3 py-2">{fecha.autoresEquipo1}</td>
                <td></td>
                <td></td>
                <td className="w-1/3 py-2">{fecha.autoresEquipo2}</td>
            </tr>
        </>
    );
};