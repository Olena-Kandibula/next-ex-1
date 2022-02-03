// import React from "react"
// import Router from "next/router"
// import { useRouter } from "next/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react/cjs/react.development";
import { MainLayout } from "../../components/MainLayout";

export default function Post({ post: serverPost }) {
    
    const [post, setPost] = useState(serverPost)
    const router = useRouter()
    
    useEffect(() => {
        async function load() {
        const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)//это router.query.id на сервере 
        const data = await response.json()
        setPost(data)
        }
        if (!serverPost) {
            load()
        }
        
    }, [])

    if (!post) {//пока не пришел ответб т,е, ждем post на клиенте
            return <MainLayout>
                <h2>Loading.....post</h2>
            </MainLayout>
        }

    // const router = useRouter()
    // console.log(router.query.id)
    // const id = router.query.id
    // console.log(post)

    return (
        <MainLayout  title={'POST page'}>
            <h1>This is {post.title}</h1>            
            <hr />
            <p>{post.body}</p> 
            <Link href = {`/posts`}><a>Back to posts</a></Link>
            {/* <button onClick = {() => Router.push('/posts')}>Go to Posts</button> */}
        </MainLayout>
    )   
}
// getInitialProps если нужно котролировать рендеринг на фронт и сервер сайт рендеринг
// Post.getInitialProps = async (ctx) => {//ctx  это context
Post.getInitialProps = async ({ query, req }) => {//query  это context.query
    // console.log('req', req)
    // const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
    if (!req) {
        return {post:null}
    }
    const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)//это query.id на клиенте
    const post = await response.json()
 
    return {
        // posts: posts// то же самое
        post
    }
    // console.log(ctx.query)
    // return{}
}

// export async function getServerSideProps({ query, req }) {// если только сервер сайт рендеринг
  
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`)//это query.id на клиенте
//     const post = await response.json()
 
//     return {
//         props: {
//             post,
//         }
        
//     }
// }