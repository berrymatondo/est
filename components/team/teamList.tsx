import Image from "next/image";
import React from "react";
import neyla from "../../public/neyla.png";
import loic2 from "../../public/loic2.png";
import { Phone } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { Separator } from "@radix-ui/react-dropdown-menu";

const TeamList = () => {
  return (
    <div className="flex flex-col justify-center px-2 gap-4 ">
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        <div>
          {" "}
          <div className="auto-cols-max	bg-red-400 col-span-1 max-h:w-20	 max-md:w-20  rounded-full overflow-hidden">
            <Image src={neyla} alt="fond" className="flex" />
          </div>
        </div>
        <div className="col-span-3">
          <p className="max-md:text-sm mb-1">
            Neyla <span className="font-semibold">Dewez-Mudi</span>
          </p>
          <p className="max-md:text-xs">
            {
              "J'aime travailler avec les enfants et les adolescents. Mon souhait est d'offrir un espace où les possibilités s'ouvrent à nouveau."
            }
          </p>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        <div>
          {" "}
          <div className="auto-cols-max	bg-red-400 col-span-1 max-h:w-20	 max-md:w-20  rounded-full overflow-hidden">
            <Image src={loic2} alt="fond" className="flex" />
          </div>
        </div>
        <div className="col-span-3">
          <p className="max-md:text-sm mb-1">
            Loïc <span className="font-semibold">Dewez</span>
          </p>
          <p className="max-md:text-xs">
            {
              "En tant qu’ostéopathe diplômé D.O, spécialisé en maternité et chez les nourrissons, ma mission est de m’assurer que chez bébé ainsi que la maman, les structures et les tissus du corps soient parfaitement mobiles, libres et fonctionnent comme ils ont été créés pour le faire.J’exerce depuis 10 ans et je suis heureux de pouvoir vous aider et vous guider."
            }
          </p>
        </div>
      </div>
      {/*       <div className="relative border overflow-hidden h-[450px]  w-[300px] rounded-lg flex flex-col items-center justify-center">
        <div className=" bg-gradient-to-tr from-white to-sky-100 h-[225px] w-[300px] rounded-br-3xl flex justify-center items-center">
          <div className="max-md:w-40 rounded-full overflow-hidden">
            <Image
              src={im1}
              alt="fond"
              width={300}
              height={300}
              // layout="responsive"
            />
          </div>
        </div>
        <div className="bg-sky-600 h-[225px] w-[300px] rounded-tl-3xl flex flex-col text-white items-center p-4 gap-2">
          <p>
            Laetitia <strong>MATONDO</strong>
          </p>
          <p>Puéricultrice, future enseignante</p>
          <p className="flex items-center gap-2">
            <MdEmail size={20} /> lea1080@hotmail.com
          </p>
          <p className="flex items-center gap-2">
            <Phone size={15} /> +32 485 10 02 45
          </p>
        </div>
        <div className="bg-white -z-10 absolute left-0 h-[450px] w-[150px]"></div>
        <div className="bg-sky-600 -z-10 absolute right-0 h-[450px] w-[150px]"></div>
      </div> */}
    </div>
  );
};

export default TeamList;
