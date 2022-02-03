import Link from "next/link"
import { MainLayout } from "../components/MainLayout"
import st from '../styles/error.module.scss'
// import variables from '../styles/variables.module.scss'

// export default function ErrorPage() {
//     return (
//         <>
//             <h1>
// Not Found
//             </h1>
//             <p>
//                 Please
//                 <Link href={'/'}><a>go back Home</a></Link>
//             </p>
//         </>
//     )
// }

export default function Custom404() {
  return (
        <MainLayout>
            <h1 className={st.error} >
          {/* <h1> */}
Not Found
            </h1>
          <p >
              {/* <p color={variables.accentColor}> */}
                Please
                <Link href={'/'}><a>go back Home</a></Link>
            </p>
        </MainLayout>
    )
}