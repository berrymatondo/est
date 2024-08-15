import Image from "next/image";
import React from "react";
import im1 from "../../public/est2.jpg";
import { Phone } from "lucide-react";
import { MdEmail } from "react-icons/md";

const TeamList = () => {
  return (
    <div className="flex justify-center ">
      <div className="relative border overflow-hidden h-[450px]  w-[250px] rounded-lg flex flex-col items-center justify-center">
        <div className=" bg-gradient-to-tr from-white to-sky-100 h-[225px] w-[250px] rounded-br-3xl flex justify-center items-center">
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
        <div className="bg-sky-600 h-[225px] w-[275px] rounded-tl-3xl flex flex-col text-white items-center p-4 gap-2">
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
      </div>
    </div>
  );
};

export default TeamList;
