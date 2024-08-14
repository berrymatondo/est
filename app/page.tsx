import Image from "next/image";
import im1 from "../public/estp1.png";
import im2 from "../public/estp2.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GlobalLayout from "@/components/nav/global";

export default function Home() {
  return (
    <GlobalLayout title="">
      <div className="flex max-md:flex-col-reverse gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-sky-600 font-semibold leading-none tracking-tight">
            {"Qui sommes-nous ?"}
          </h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          tempore ullam sapiente animi ipsa reiciendis delectus est id ex,
          officia, quidem eligendi omnis molestias doloremque beatae incidunt
          in! Repudiandae, molestiae.
        </div>
        <div className="max-md:w-52 rounded-lg overflow-hidden">
          <Image
            src={im1}
            alt="fond"
            width={500}
            height={500}
            // layout="responsive"
          />
        </div>
      </div>
    </GlobalLayout>
  );
}
