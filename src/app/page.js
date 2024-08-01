import Image from "next/image";
import { Tabla } from "./components/Tabla";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="relative text-white min-h-screen">
      <div className="flex justify-center ">
        <Image className="w-[50%] place-self-center lg:hidden " src='/logos/logocubb.png' width={400} height={400} alt='LigaCubb' />
        <h1 className="text-center text-5xl hidden lg:block animate__animated animate__fadeInLeft pt-[30px] pb-[12px]"> Liga Universitaria Bahia Blanca </h1>
      </div>
      <Home />
      <div className="relative z-10">
        <Tabla />
      </div>
      <Footer />
    </main>
  );
}
