import Image from "next/image";

export const Home = () => {
  return (
    <div id='carrousel' className="absolute inset-0 z-0  w-full overflow-hidden mt-[14.5%] lg:mt-[100px] ">
      <ul className="flex w-[300vw]  animate-slide bg-black">
        <li className="w-full h-full"><Image width={5000} height={3300} src="/fondos/repo1.jpg" alt="Imagen 1" className="w-screen h-screen object-cover opacity-50" /></li>
        <li className="w-full h-full"><Image width={5000} height={3300} src="/fondos/woman1.jpg" alt="Imagen 2" className="w-screen h-screen object-cover opacity-50" /></li>
        <li className="w-full h-full"><Image width={5000} height={3300} src="/fondos/repo2.jpg" alt="Imagen 3" className="w-screen h-screen object-cover opacity-50" /></li>
      </ul>
    </div>
  );
};
