import Image from 'next/image'
import Navbar from './components/Navbar'
import './globals.css'

// function MyApp({ Component, pageProps }) {
//   return <>
//     <Navbar/>

//     <Component {...pageProps} />
//   </>
// }
export default function Home() {
  return (
    <body>
      <Navbar/>
    </body>
    )
  }

// export default MyApp
