import Image from "next/image";
import { Tabla } from "./components/Tabla";
import { Home } from "./components/Home";

export default function App() {
  return (
    <main
   
    className="pt-[35px] text-white">
      <div className="flex justify-center">
        <Image className="w-[50%] place-self-center lg:hidden" src='/logos/logocubb.png' width={400} height={400} alt='LigaCubb' />
      </div>
      <h1 className="text-center text-5xl hidden lg:block animate__animated animate__fadeInLeft"> Liga Universitaria Bahia Blanca </h1>
      <Home />
      <Tabla />
    </main>
  );
}
