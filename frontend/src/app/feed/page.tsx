"use client";
import Navbar from '../components/Navbar'
import '../globals.css'
import Posts from '../components/Posts'
import Typewriter from 'typewriter-effect';

export default function Feed() {
  return (
    
    <main>
      <Navbar page="feed"/>
      <div className='typewriter'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Welcome!')
              .pauseFor(500)
              .deleteAll()
              .typeString('Everyone deserves kindness!')
              .pauseFor(500)
              .deleteAll()
              .typeString('Join us in giving hopes to others.')
              .pauseFor(500)
              .deleteAll()
              .start();
          }}
        />
      </div>
      <Posts/>
    </main>
    )
  }
