import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>hi</h2>
      im NextJS
      <br></br>
      <Image width={100} height={100} alt="귀여운" src="/cutie.png"/>
    </>
  );
}
