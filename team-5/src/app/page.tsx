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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar/>
    </main>
    )
  }

// export default MyApp
