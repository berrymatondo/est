"use client";
import Image from "next/image";
import im1 from "../public/est2.jpg";
import im2 from "../public/estp2.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GlobalLayout from "@/components/nav/global";
import { ArrowBigRight, Fingerprint } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <GlobalLayout title="">
      <div className="pb-10 px-2">
        <div className="flex items-center max-md:flex-col-reverse gap-4">
          <div className="flex flex-col gap-4 md:gap-8">
            <h1 className="max-md:text-center text-3xl text-sky-600 font-semibold leading-none tracking-tight">
              {"Qui sommes-nous ?"}
            </h1>
            <p>
              {"Nous sommes "} <strong>Kclaisse</strong> &{" "}
              <strong>Laetitia</strong>,{" "}
              {
                "épouses et mères, et sommmes  des pationnées de la petite enfance."
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
              "L'éducation de nos enfants, c'est un parcours unique et souvent semé d'embûches."
            }
          </p>
          <br />
          <p>
            Chez
            <strong> Educationsanstabou</strong>
            {
              ", nous vous conseillons, encouageons, guidons et accompagnons à exercer votre autorité et pouvoir que Dieu vous a accordés afin de faire de vos enfants des véritables champions qui brillent dans leurs sphères d'influence."
            }
          </p>
          <br />
          <p>
            <strong className="italic font-semibold">
              {"Eduquer un enfant n'est pas juste mettre des règles!"}
            </strong>{" "}
            {
              "Mais grâce à notre expérience de mères et de puéricultrices ainsi que celle de nos collaborateurs, spécialistes de la petite enfance (sages femmes, puéricultrices, pédiatres, psychologues, institutrices, ostéopathes, ...), nous vous offrons :"
            }
          </p>
          <br />
          <ul className="pl-4 md:pl-8 ">
            <li className="flex  md:items-center gap-2">
              {/*               <div className="h-1.5 w-1.5 rounded-full bg-sky-600"></div>
               */}{" "}
              <span className="italic text-sky-800 dark:text-sky-400">
                {
                  "- Des outils pour définir ou renforcer la vision que vous avez de l'éducation de vos enfants."
                }
              </span>
            </li>
            <li className="flex  md:items-center gap-2">
              {/*               <div className="h-1.5 w-1.5 rounded-full bg-sky-600"></div>
               */}{" "}
              <span className="italic text-sky-800 dark:text-sky-400">
                {
                  "- Des outils pour mieux comprendre le but de l'éducation de l'enfant."
                }
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="italic text-sky-800 dark:text-sky-400">
                {"- Des clés pour une éducation sécure dans la bienveillance."}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="italic text-sky-800 dark:text-sky-400">
                {"- Un espace d'échange et de partage avec d'autres parents."}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="italic text-sky-800 dark:text-sky-400">
                {
                  "- Des formations pour approfondir vos connaissances et vos compétences entant que parent."
                }
              </span>
            </li>
          </ul>
          <br />
          <div
            onClick={() => router.push("/modules")}
            className="flex  justify-center "
          >
            {/*             <ArrowBigRight className="text-sky-600 max-md:hidden" />{" "}
             */}
            <p className="md:w-1/2 text-center p-2 text-white bg-sky-600 rounded-full hover:bg-sky-800 hover:cursor-pointer">
              {"S'inscrire à nos formations"}
            </p>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
}
