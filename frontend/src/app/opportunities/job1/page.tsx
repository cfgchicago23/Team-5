import JobBoard from '../../components/JobBoard'
import Navbar from '../../components/Navbar'
import JobPosting from '../../components/JobPosting'
import '../../globals.css'

export default function Opportunities() {
  return (
    <main>
      <Navbar page="opportunities"/>
      <a href="../opportunities"><img className="back-button" src="../../back-button.svg"/></a>
      <JobPosting/>
    </main>
    )
  }