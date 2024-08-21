import Image from "next/image";
import React from "react";
import neyla from "../../public/neyla.png";
import loic2 from "../../public/loic2.png";
import bruce from "../../public/bruce.png";
import kclaisse from "../../public/kclaisse.png";
import laetitia from "../../public/laetitia.png";
import gracia from "../../public/gracia.png";
import { Phone } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { Separator } from "@radix-ui/react-dropdown-menu";

const TeamList = () => {
  return (
    <div className="flex flex-col justify-center px-2 gap-4 ">
      <p className="text-center text-2xl font-semibold text-sky-800  p-4">
        Fondatrices
      </p>
      <div className="md:grid md:grid-cols-2 md:gap-2">
        <div className="grid grid-cols-4 gap-2 md:gap-4 bg-neutral-100 rounded-lg p-2 max-md:mb-2">
          <div>
            {" "}
            <div className="auto-cols-max col-span-1 h-20	 w-20 md:h-32 md:w-32  rounded-full overflow-hidden">
              <Image src={kclaisse} alt="fond" className="flex" />
            </div>
          </div>
          <div className="md:ml-4 col-span-3">
            <p className="max-md:text-sm text-xl mb-1 text-sky-600 dark:text-sky-400">
              Kclaisse <span className="font-semibold">Dewez-Mudi</span>
            </p>
            <p className="max-md:text-sm">
              {
                "J'aime travailler avec les enfants et les adolescents. Mon souhait est d'offrir un espace où les possibilités s'ouvrent à nouveau."
              }
            </p>
          </div>
        </div>
        {/*         <Separator className="md:hidden" />
         */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 bg-neutral-100 rounded-lg p-2 ">
          <div>
            {" "}
            <div className="auto-cols-max col-span-1 h-20	 w-20 md:h-32 md:w-32   rounded-full overflow-hidden">
              <Image src={laetitia} alt="fond" className="flex" />
            </div>
          </div>
          <div className="md:ml-4  col-span-3">
            <p className="max-md:text-sm text-xl mb-1 text-sky-600 dark:text-sky-400">
              Laetitia <span className="font-semibold">Matondo</span>
            </p>
            <p className="max-md:text-sm">
              {
                "Ostéopathe diplômé D.O, spécialisé en maternité et chez les nourrissons. Ma mission est de m’assurer que chez bébé ainsi que la maman, les structures et les tissus du corps soient parfaitement mobiles, libres et fonctionnent comme ils ont été créés pour le faire."
              }
            </p>
          </div>
        </div>
      </div>
      <p className="text-center text-2xl font-semibold text-sky-800  p-4">
        Collaborateurs
      </p>
      <div className="md:grid md:grid-cols-2 md:gap-2">
        <div className="grid grid-cols-4 gap-2 md:gap-4 bg-neutral-100 rounded-lg p-2 max-md:mb-2">
          <div>
            {" "}
            <div className="auto-cols-max col-span-1 h-20	 w-20 md:h-32 md:w-32  rounded-full overflow-hidden">
              <Image src={bruce} alt="fond" className="flex" />
            </div>
          </div>
          <div className="md:ml-4 col-span-3">
            <p className="max-md:text-sm text-xl mb-1 text-sky-600 dark:text-sky-400">
              Bruce <span className="font-semibold">Konzi</span>
            </p>
            <p className="max-md:text-sm">
              {
                "Je suis puéricultrice de puis plus de 15 ans et également responsable de la nurserie et de la jeunesse dans mon église."
              }
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 md:gap-4 bg-neutral-100 rounded-lg p-2 max-md:mb-2">
          <div>
            {" "}
            <div className="auto-cols-max col-span-1 h-20	 w-20 md:h-32 md:w-32  rounded-full overflow-hidden">
              <Image src={gracia} alt="fond" className="flex" />
            </div>
          </div>
          <div className="md:ml-4 col-span-3">
            <p className="max-md:text-sm text-xl mb-1 text-sky-600 dark:text-sky-400">
              Gracia <span className="font-semibold">Nkaya Kabamba</span>
            </p>
            <p className="max-md:text-sm">
              {
                "Je suis médecin généraliste. Consultations enfants et adultes, Pôle mères-enfants, Contraception, Suivi des familles..."
              }
            </p>
          </div>
        </div>
        {/*       <Separator />
         */}{" "}
        <div className="grid grid-cols-4 gap-2 md:gap-4 bg-neutral-100 rounded-lg p-2  max-md:mb-2">
          <div>
            {" "}
            <div className="auto-cols-max col-span-1 h-20	 w-20 md:h-32 md:w-32  rounded-full overflow-hidden">
              <Image src={neyla} alt="fond" className="flex" />
            </div>
          </div>
          <div className="md:ml-4 col-span-3">
            <p className="max-md:text-sm text-xl mb-1 text-sky-600 dark:text-sky-400">
              Neyla <span className="font-semibold">Dewez-Mudi</span>
            </p>
            <p className="max-md:text-sm">
              {
                "J'aime travailler avec les enfants et les adolescents. Mon souhait est d'offrir un espace où les possibilités s'ouvrent à nouveau."
              }
            </p>
          </div>
        </div>
        {/*       <Separator />
         */}{" "}
        <div className="grid grid-cols-4 gap-2 md:gap-4 bg-neutral-100 rounded-lg p-2  max-md:mb-2">
          <div>
            {" "}
            <div className="auto-cols-max col-span-1 h-20	 w-20 md:h-32 md:w-32   rounded-full overflow-hidden">
              <Image src={loic2} alt="fond" className="flex" />
            </div>
          </div>
          <div className="md:ml-4 col-span-3">
            <p className="max-md:text-sm text-xl mb-1 text-sky-600 dark:text-sky-400">
              Loïc <span className="font-semibold">Dewez</span>
            </p>
            <p className="max-md:text-sm">
              {
                "Ostéopathe diplômé D.O, spécialisé en maternité et chez les nourrissons. Ma mission est de m’assurer que chez bébé ainsi que la maman, les structures et les tissus du corps soient parfaitement mobiles, libres et fonctionnent comme ils ont été créés pour le faire."
              }
            </p>
          </div>
        </div>
      </div>
      {/*       <Separator />
       */}{" "}
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
