import NextNprogress from 'nextjs-progressbar';
import '../styles/main.css'

export default function MyApp({ Component, pageProps }) {
    console.log('Component',Component)
    return (
        <>
            <NextNprogress
  color="green"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
/>
            <Component  {...pageProps} />
            {/* <style jsx global>{`
            body {
                font-family: 'Roboto', sans-serif;
            }
            `}

            </style> */}
        </>
    )
}