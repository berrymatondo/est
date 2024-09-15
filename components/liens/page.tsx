import React from "react";
import educ2 from "../../public/educ2.jpg";
import educ from "../../public/educ.jpg";
import Image from "next/image";
import Link from "next/link";

const LiensList = () => {
  return (
    <div>
      <div className="flex flex-col justify-center px-2 gap-4 ">
        <p className="text-center text-2xl font-semibold text-sky-800  p-4">
          Chaines Youtube
        </p>
        <div className="md:grid md:grid-cols-2 md:gap-2">
          <div className="grid grid-cols-4 gap-2 md:gap-4 bg-neutral-100 rounded-lg p-2 max-md:mb-2">
            <div>
              {" "}
              <div className="auto-cols-max col-span-1 h-20	 w-20 md:h-32 md:w-32  rounded-full overflow-hidden">
                <Image src={educ} alt="fond" className="flex" />
              </div>
            </div>
            <div className="md:ml-4 col-span-3">
              <Link
                target="_blank"
                href="https://www.youtube.com/@Educationsanstabou-l2t"
              >
                <p className="max-md:text-sm text-xl mb-1 text-sky-600 dark:text-sky-400">
                  {" "}
                  <span className="font-semibold">Education Sans Tabou</span>
                </p>{" "}
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/@Educationsanstabou-l2t"
              >
                <p className="max-md:text-sm">
                  {
                    "L'éducation de vos enfants, c'est un parcours unique et souvent semé d'embûches. Chez Educationsanstabou, nous sommes là pour vous guider et vous accompagner à chaque étape."
                  }
                </p>
              </Link>
            </div>
          </div>
          {/*         <Separator className="md:hidden" />
           */}
          <div className="grid grid-cols-4 gap-2 md:gap-4 bg-neutral-100 rounded-lg p-2 ">
            <div>
              {" "}
              <div className="auto-cols-max col-span-1 h-20	 w-20 md:h-32 md:w-32   rounded-full overflow-hidden">
                <Image src={educ2} alt="fond" className="flex" />
              </div>
            </div>
            <div className="md:ml-4  col-span-3">
              <Link
                target="_blank"
                href="https://www.youtube.com/@kclaisekimsurvivor"
              >
                <p className="max-md:text-sm text-xl mb-1 text-sky-600 dark:text-sky-400">
                  {" "}
                  <span className="font-semibold">Survivante et Temoin</span>
                </p>{" "}
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/@kclaisekimsurvivor"
              >
                <p className="max-md:text-sm">
                  {
                    "Je suis Kclaise, enfant de Dieu, survivante, épouse, mère, auteure et entrepreneure. Ma chaîne est dédiée à partager mon histoire, mon témoignage et à inspirer d'autres personnes à surmonter les épreuves de la vie !"
                  }
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiensList;
