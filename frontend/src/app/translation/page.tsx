import Navbar from '../components/Navbar'
import '../globals.css'
import Example from '../translator/page'
export default function Translation() {
  return (
    <main>
      <Navbar page="translation"/>

      <Example/>
    </main>
    )
  }