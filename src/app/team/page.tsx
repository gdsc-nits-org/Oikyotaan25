'use client';
import dynamic from "next/dynamic";
const Team = dynamic(() => import("~/components/Team/Team"), { ssr: false });
const page = () => {
  return (
    <div>
      <Team/>
    </div>
  )
}

export default page
