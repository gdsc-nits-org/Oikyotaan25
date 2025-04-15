"use client"
import dynamic from "next/dynamic";
const Gallery = dynamic(() => import("~/components/Gallery/Gallery"), { ssr: false });
const Page = () => {
    return <Gallery/>
  };
  
  export default Page;