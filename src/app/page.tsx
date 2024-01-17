"use client";
import Image from 'next/image'
import BackgroundTogler from '../components/BackgroundTogler'

export default function Home() {
  return (
    <div>
      <div >
       <div> <BackgroundTogler/></div>
       <div>        
        <div>
         <div>
          <h1>Welcome to the</h1>
          <h1>Frontend Quiz!</h1></div>
         <div><p>Pick a subject to get started.</p></div>
        </div>
        <div></div>
       </div>
      </div>
    </div>
  )
}
