import Image from "next/image";
import im1 from "../public/estp1.png";
import im2 from "../public/estp2.png";

export default function Home() {
  return (
    <div className="">
      <div className="md:hidden rounded-lg overflow-hidden">
        <Image
          src={im1}
          alt="fond"
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
    </div>
  );
}
