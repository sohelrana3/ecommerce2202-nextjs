import Image from "next/image";
import Banner from "@/components/Banner";
import Catagory from "@/components/Catagory";
import Product from "@/components/Product";

export default function Home() {
  return (
    <>
     <Banner />
     <Catagory />
     <Product />
    </>
  );
}
