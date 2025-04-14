"use client"
import PhotoGallery from "~/components/navbar/Gallery/Gallery";
import dynamic from "next/dynamic";
const Gallery = dynamic(() => import("~/components/navbar/Gallery/Gallery"), { ssr: false });
const Page = () => {
    return <Gallery/>
  };
  
  export default Page;