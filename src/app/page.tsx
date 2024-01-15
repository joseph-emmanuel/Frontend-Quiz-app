import Image from 'next/image'
import BackgroundTogler from '../components/BackgroundTogler'

export default function Home() {
  function toggleButton() {
    // Add your toggle logic here if needed
    console.log("Button toggled!");
  }
  return (
    <div className='max-w-[20px]'>
     <input type="checkbox" onClick={toggleButton()}/>
      <span className="slider"></span>
    </div>
  )
}
