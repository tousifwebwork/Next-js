'use client';

import { useEffect } from "react";

  

export default async function Page() {
  
  const handleAPI=async () => {
    const res = await fetch("api/user",{cache: "no-cache"}as RequestInit);
    const data = await res.json();
    console.log(data);
  }

  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <div> 
      <p>This is firstPage</p> 
    </div>
  );
}
