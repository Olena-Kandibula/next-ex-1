import Link from "next/link"
// import Head from "next/head"
import { MainLayout } from "../components/MainLayout"
import st from '../styles/index.module.scss'


export default function Index() {
  return (
    <MainLayout  title={'Home page'}>  
      
      <h1 className={st.title} >hello next</h1>
    <p><Link href={'/about'}><a>About</a></Link> </p>
    <p><Link href={'/posts'}><a  >Posts</a></Link> </p>
    </MainLayout>
  )
}
