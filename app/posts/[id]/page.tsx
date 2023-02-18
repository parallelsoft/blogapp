import Image from 'next/image'

import Link from 'next/link'
import { posts } from '@/data/posts'
// type Post = {
//   id: string,
//   title: string,
//   content: string,
//   author: string,
//   date: string
// }

let defPost = {
  id: "1",
  title: "Default Post",
  content: "This post is default post",
  author: "No One",
  date: "15-01-1987"
}
async function getPost(id:string) {
  const post = posts.find((post)=>(post.id === id));
  if(post === undefined)
  return defPost;
  else return post;
}

export default async function Post({params}:{params:{id: string}}) {
  const { id } = params;
    const post = await getPost(id);

  return (
    <>
      <h1>{ post.title}</h1>
      <Link href="/">Back to Home</Link>
      </>
    
  )
}
