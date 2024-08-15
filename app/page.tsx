import Image from "next/image";
import im1 from "../public/pres.jpg";
import im2 from "../public/estp2.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GlobalLayout from "@/components/nav/global";
import { ArrowBigRight, Fingerprint } from "lucide-react";

export default function Home() {
  return (
    <GlobalLayout title="">
      <div className="pb-10">
        <div className="flex items-center max-md:flex-col-reverse gap-4">
          <div className="flex flex-col gap-4 md:gap-8">
            <h1 className="max-md:text-center text-3xl text-sky-600 font-semibold leading-none tracking-tight">
              {"Qui sommes-nous ?"}
            </h1>
            <p>
              {"Nous sommes "} <strong>Kclaisse</strong> &{" "}
              <strong>Laetitia</strong>,{" "}
              {
                "chacune de nous est mariée et sommmes des pationnées de la petite enfance."
              }
            </p>
          </div>
          <div className="max-md:w-44 rounded-full overflow-hidden">
            <Image
              src={im1}
              alt="fond"
              width={300}
              height={300}
              // layout="responsive"
            />
          </div>
        </div>
        <div className="mt-4">
          <p>
            {
              "L'éducation de vos enfants, c'est un parcours unique et souvnt semé d'embûches."
            }
          </p>

          <p>
            Chez
            <strong> Educationsanstabou</strong>
            {
              ", nous sommes là pour vous guider et vous accompagner à chaque étape."
            }
          </p>
          <br />
          <p>
            {
              "Grâce à notre expérience de mères et de puéricultrices ainsi qu'à notre réseau de spécialistes, nous vous offrons :"
            }
          </p>
          <ul className="pl-4 md:pl-8 ">
            <li className="flex  md:items-center gap-2">
              {/*               <div className="h-1.5 w-1.5 rounded-full bg-sky-600"></div>
               */}{" "}
              <span className="italic text-sky-800">
                {"Des clés pour une éducation positive et bienveillante"}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="italic text-sky-800">
                {
                  "Des outils pour développer l'autonomie et la confiance en soi de votre enfant"
                }
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="italic text-sky-800">
                {"Un espace d'échange et de partage avec d'autres parents"}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="italic text-sky-800">
                {
                  "Des formations pour approfondir vos connaissances et vos compétences"
                }
              </span>
            </li>
          </ul>
          <br />
          <p className="flex items-center">
            <ArrowBigRight className="text-sky-600" />{" "}
            <span className="">
              {
                "Rejoignez notre communauté et découvrez comment concilier vos valeurs et les réalités de la parentalité."
              }
            </span>
          </p>
        </div>
      </div>
    </GlobalLayout>
  );
}
