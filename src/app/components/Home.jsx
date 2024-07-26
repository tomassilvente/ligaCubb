import Image from "next/image"

export const Home = () => {
  return (
        <div id='carrousel' className="mt-[30px]">
            <ul className="w-[screen] absolute bg-black " id='grande'>
                <Image width={5000} height={3300} src="/fondos/repo1.jpg" alt="Imagen 1" className="img w-screen opacity-50" />
                <Image width={5000} height={3300} src="/fondos/woman1.jpg" alt="Imagen 2" className="img w-screen opacity-50" />
                <Image width={5000} height={3300} src="/fondos/repo2.jpg" alt="Imagen 3" className="img w-screen opacity-50" />
            </ul>
        </div>
  )
}
