import Image from 'next/image'

export const TeamInfo = ({team,index}) => {
  return (
    <tr className={`border-[#000] border border-l-0 md:text-lg  ${index % 2 == 0 ? 'bg-[#eee]' : ''}`} key={team.equipo}>
        <td className={`text-white ${(index + 1) < 13 ? (index + 1) < 5 ? (index + 1) == 1 ? 'bg-[#bba245]' :'bg-[#156e2a]' : 'bg-[#2ae355]' : 'bg-[#e72a2a]'}`}>{index + 1}</td>
        <td className='flex md:w-[350px] '><Image width={36} height={36} alt={team.equipo} className='w-[20px] h-[20px] sm:w-[36px] sm:h-[36px] md:mx-[20px] sm:mx-[10px] mx-[4px]' src={team.logo} /><p className='sm:py-[5px] text-sm md:text-base'>{team.equipo}</p></td>
        <td className='sm:w-[30px] w-[20px] font-bold'>{team.puntos}</td>
        <td className='sm:w-[30px] w-[20px]'>{team.partidosJugados}</td>
        <td className='sm:w-[30px] w-[20px]'>{team.partidosGanados}</td>
        <td className='sm:w-[30px] w-[20px]'>{team.partidosEmpatados}</td>
        <td className='sm:w-[30px] w-[20px]'>{team.partidosPerdidos}</td>
        <td className='sm:w-[30px] w-[20px]'>{team.golesFavor}</td>
        <td className='sm:w-[30px] w-[20px]'>{team.golesContra}</td>
        <td className='w-[30px] pr-[5px]'>{team.golesFavor - team.golesContra}</td>
    </tr>
  )
}
