import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import "./home.css";
import { posts } from "@/data/posts";

const inter = Inter({ subsets: ["latin"] });

type post = {
  id: string,
  title: string,
  content: string,
  author: string,
  date: string
}

export default function Home() {
  return (
    <>
      <h1 className="bg-gray-400 text-2xl text-white text-center">
        Hello World
      </h1>
      <div className="bg-blue-300 rounded-full text-gray-100 w-fit py-1 px-2 mt-2 mx-auto hover:bg-blue-500 hover:text-white">
        <Link href={"./about"}> About Us</Link>
      </div>
      <div className="bg-blue-300 rounded-full text-gray-100 w-fit py-1 px-2 mt-2 mx-auto hover:bg-blue-500 hover:text-white">
        <Link href={"./posts"}>Blog Page</Link>
      </div>

      <div>
        <h1>Amazing Technologies</h1>
        <ul className="bg-gray-600 list-outside py-5 text-center">
        {
          posts.map(({id, title,content, author ,date}:post) =>
          (
            <li className="py-4 mx-auto border-red-500 text-lg"><Link className=" text-white" href={`./posts/${id}`}> {title}</Link></li>
          )
            
          )
        }
        </ul>
           

      </div>
    </>
  );
}
