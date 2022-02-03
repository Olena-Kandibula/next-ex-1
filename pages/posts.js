import { useState, useEffect } from "react"
// import { useRouter } from "next/router";
import { MainLayout } from "../components/MainLayout"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

// export default function Posts({posts}) {
    export default function Posts({posts:serverPosts}) { //добавляем лоадинг

    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     async function load() {
    //         const respons = await fetch('http://localhost:4200/posts')
    //         const json = await respons.json()
    //         setPosts(json)
    //     }
    //     load()
    // }, [])

    const [posts, setPosts] = useState(serverPosts)
    // const router = useRouter
    
    useEffect(() => {
        async function load() {
             const newLocal = `${process.env.API_URL}/posts`
    // const response = await fetch(newLocal)
        const response = await fetch(newLocal)//это router.query.id на сервере 
        const data = await response.json()
        setPosts(data)
        }
        if (!serverPosts) {
            load()
        }
        
    }, [])

    if (!posts) {//пока не пришел ответб т,е, ждем post на клиенте
            return <MainLayout>
                <h2>Loading.....posts.</h2>
            </MainLayout>
        }

    

    return(
    <MainLayout title={'posts page'}>   
        
        <Head>
            <title>Posts page</title>            
        </Head>

        <h1>Posts page</h1>        
        {/* <pre> {JSON.stringify(posts, null,2)}</pre> */}
        
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={'/post/[id]'} as={`/post/${post.id}`}>
                          <a>{post.title}</a>
                        </Link>
                    </li>
                ))}

        </ul>
    
        </MainLayout>
    )
}

// Posts.getInitialProps = async () => {
    Posts.getInitialProps = async ({req }) => {//req не получимб добавляем для лоадинга
    
    if (!req) {
        return {posts:null}
    }
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()
    
    return {
        // posts: posts// то же самое
        posts
    }
    
}