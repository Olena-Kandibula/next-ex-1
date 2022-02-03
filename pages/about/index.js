import React from "react"
import Router from "next/router"
import { MainLayout } from "../../components/MainLayout"

export default function About({title}) {

    const linkclickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title={'about page'}>           
       
            <h1>{title}</h1>
            <button onClick={linkclickHandler}>Go back to Home</button>
            <button onClick = {() => Router.push('/posts')}>Go to Posts</button>
        </MainLayout>
    )
}

About.getInitialProps = async () => {
    // const newLocal = 'http://localhost:4200/about'
    const newLocal = `${process.env.API_URL}/about`
    const response = await fetch(newLocal)
    const data = await response.json()
    return {
        title:data.title
       
       
    }

}