'use client';
import { useEffect } from "react";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import Catalog from "@/components/Catalog/Catalog";
import Partness from "@/components/Partness/Partness";
import AltBanner from "@/components/AltBanner/AltBanner";


export default function Home() {

  useEffect(() => {
    async function fetchSneakers() {
      try {
        const response = await fetch('/api/hello');
    
    
    
      } catch (error) {
        console.error('Failed to fetch sneakers:', error);
      }
    }

    fetchSneakers();
  }, []);

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="z-10 w-full  items-center justify-between font-mono text-sm ">
        <Banner />
        <Catalog/>
        <Partness/>
        <AltBanner title="New Arrivals" subtitle="Trending Products" buttonText="Shop Now" backgroundImage="https://img.freepik.com/premium-vector/livingroom-interior-clean-wall-with-grey-floor_755228-2019.jpg" />
      </div>
    </main>
  );
}
