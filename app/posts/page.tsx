import React from "react";
import Link from "next/link";
 let about =()=>{
   return (
        <>
        <h1 className="bg-gray-400 text-white text-2xl m-auto text-center">Welcome to our Blog</h1>
        <div className="bg-green-700 text-white rounded-full py-1 px-2 m-auto w-fit mt-4">
            <Link href ="/">Back to Home</Link>
        </div>
        </>
    )
 }
 export default about;