import Navbar from '../components/Navbar'
import '../globals.css'
import Posts from '../components/Posts'

export default function Feed() {
  return (
    <main>
      <Navbar page="feed"/>
      <Posts/>
    </main>
    )
  }
