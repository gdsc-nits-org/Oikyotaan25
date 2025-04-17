"use client"
import dynamic from "next/dynamic";
const Artist = dynamic(() => import("~/components/artist/artist"), { ssr: false });
const Page = () => {
    return <Artist/>
  };
  
  export default Page;