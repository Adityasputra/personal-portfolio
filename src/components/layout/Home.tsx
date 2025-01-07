import Image from "next/image";
import Avatar from "../../../public/Avatar.jpeg";
import styles from "../../styles/Home.module.css";

export default function HomePage() {
  return (
    <div className="flex-grow w-full flex lg:flex-row flex-col-reverse">
      <div className="lg:w-1/2 h-full py-20 flex flex-col text-[#0e1424]">
        <h1 className="text-4xl text-center lg:text-left lg:text-8xl font-mono font-bold bg-gradient-to-r from-[#FEB143] to-[#b9a87d] bg-clip-text text-transparent">
          Software Engineer & Tech Enthusiast
        </h1>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center">
        <div className={styles.imageContainer}>
          <Image
            src={Avatar}
            alt="Avatar Profile"
            className={styles.setImage}
          />
          <div className={styles.sideLeft}></div>
          <div className={styles.sideRight}></div>
        </div>
      </div>
    </div>
  );
}
