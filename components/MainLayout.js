import Link from "next/link"
import Head from "next/head"

export function MainLayout({children, title= 'Next app'}) {
    return (
        <>
            <Head>
                <title>{title}|Next test</title>             
                <meta name="keywords" content="next, react, javascript" />                
                <meta name="description" content="next test site"></meta>                
                <meta charSet="utf-8" />                
            </Head>

            <nav>
                <Link href={'/'}><a>Home</a></Link> 
                <Link href={'/about'}><a>About</a></Link> 
                <Link href={'/posts'}><a>Posts</a></Link>                 
            </nav>

            <main>
                {children}
            </main>

            <style jsx>{`
            nav{
                position:fixed;
                height:60px;
                left:0;
                right:0;
                background: grey;
                top:0;  
                display:flex;
                justify-content: space-around;
                align-items: center;

            }
            nav a  {
                color: #fff;
                text-decoration:none;
            }

            main {
                margin-top:60px;
            }
            `}</style>
            
        </>
    )
}