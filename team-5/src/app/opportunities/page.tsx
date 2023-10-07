import JobBoard from '../components/JobBoard'
import Navbar from '../components/Navbar'
import '../globals.css'

export default function Opportunities() {
  return (
    <main>
      <Navbar page="opportunities"/>
      <JobBoard/>
      This is the Opportunities Page
    </main>
    )
  }