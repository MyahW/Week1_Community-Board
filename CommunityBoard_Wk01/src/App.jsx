import './App.css';
import Cards from './components/Cards.jsx';
import {eventOne, eventTwo, eventThree, eventFour, eventFive, eventSix, eventSeven, eventEight, eventNine, eventTen} from './assets/images/image-access.jsx';

function App() {

  return (
    <>
      <h1 className='text-style'>Fiber Arts Conventions 2026</h1>
      <div className="grid-container">
        <div className="grid-item">    
          <img src={eventOne} className='image-style'/>
          <Cards 
                 title='Texas Wool Week | Bandera, TX' 
                 date='March 2-8, 2026' 
                 description='Join our 7-day,11th-annual celebration of fiber arts held at The Sheepwalk Ranch in Bandera, Texas. It features hands-on classes (spinning, weaving, felting), a fleece sale, vendors, and workshops focusing on wool traditions and contemporary craft in the Texas Hill Country'/>
        </div>
        <div className="grid-item">
          <img src={eventTwo} className='image-style'/>
          <Cards title='Rosecity Yarn Crawl | Chicago, IL' 
                 date='March 5-8, 2026' 
                 description=''/>
        </div>
        <div className="grid-item">
          <img src={eventThree} className='image-style'/>
          <Cards title='03-Yarn Con' 
                 date='April 11 - 12, 2026' 
                 description=''/>
        </div>
        <div className="grid-item">
          <img src={eventFour} className='image-style'/>
           <Cards title='04-Nash Yarn Fest Getaway' 
                 date='April 16, 20, 2026' 
                 description=''/>
        </div>
        <div className="grid-item">
          <img src={eventFive} className='image-style'/>
          <Cards title='05-Maryland Sheep and Wool' 
                 date='May 2-3, 2026' 
                 description='one of the nations largest, premier festivals celebrating sheep, wool, and fiber arts, held annually. It features over 250 vendors, 600+ sheep, workshops, and competitions, drawing fiber enthusiasts for shopping, livestock shows, and educational demonstrations.'/>
        </div>
        <div className="grid-item">
          <img src={eventSix} className='image-style'/>
          <Cards title='06-FibreFest | Almonte, ON' 
                 date='September 12-13, 2026' 
                 description=''/>
        </div>
        <div className="grid-item">
          <img src={eventSeven} className='image-style'/>
          <Cards title='07-Flock Fiber Festival' 
                 date='July 31- August 2, 2026' 
                 description=''/>
        </div>
        <div className="grid-item">
          <img src={eventEight} className='image-style'/>
          <Cards title='08-Beachburg Fibre Fest' 
                 date='Septeber 20th, 2026' 
                 description=''/>
        </div>
        <div className="grid-item">
          <img src={eventNine} className='image-style'/>
          <Cards title='09-New York Sheep and Wool Festival' 
                 date='October 18-19, 2026' 
                 description='One of the largest fiber festivals in the U.S., featuring hundreds of vendors selling yarn, fiber, and handmade goods, alongside livestock shows, workshops, and agricultural education. Join us for our two-day event held at the Dutchess County Fairgrounds in Rhinebeck, NY.'/>
        </div>
        <div className="grid-item">
          <img src={eventTen} className='image-style'/>
          <Cards title='01-Wool and Fiber Festival | Bloomington, IN' 
                 date='October 2-3, 2026' 
                 description=''/>
        </div>
        
      </div>
    </>
  )
}

export default App
