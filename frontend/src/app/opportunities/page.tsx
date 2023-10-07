import JobBoard from '../components/JobBoard'
import Navbar from '../components/Navbar'
import '../globals.css'


export default function Opportunities() {
  return (
  <main>
    <Navbar page="opportunities" />
    <div className="image-container">
      <img
        src="../BeforeAndAfter.png"
        alt="Before and After"
        width={600}
        height={400}
      />
    </div>
    <JobBoard />
  </main>
    )
  }
