import Image from 'next/image'
import Navbar from './components/Navbar'
import JobBoard from './components/JobBoard'
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
      <main>
        <JobBoard/>
      </main>
    </body>
    )
  }

// export default MyApp
