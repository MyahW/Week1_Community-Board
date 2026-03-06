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
          <a href="https://texaswoolweek.com/" target="_blank"><button>View Website</button></a>
        </div>
        <div className="grid-item">
          <img src={eventTwo} className='image-style'/>
          <Cards title='Rosecity Yarn Crawl |  Portland, OR' 
                 date='March 5-8, 2026' 
                 description='A annual 4-day for fiber artists, featuring 9-11 local shops with special, themed, and exclusive patterns. It includes trunk shows, prizes, and a "Mystery Along" (MCAL/MKAL) project, with options for both in-person and virtual participation, including a passport program for prizes'/>
          <a href="https://www.rosecityyarncrawl.com/#:~:text=The%20Rose%20City%20Yarn%20Crawl%20is%20an,*%20Weird%20Sisters%20*%20Starlight%20Knitting%20Society" target="_blank"><button>View Website</button></a>
        </div>
        <div className="grid-item">
          <img src={eventThree} className='image-style'/>
          <Cards title='Yarn Con | Chicago, IL' 
                 date='April 11-12, 2026' 
                 description='Participants travel to various participating independent yarn stores throughout Chicagoland. It typically features exclusive patterns, raffle prizes, trunk shows, and commemorative gear like project bags and tote bags'/>
          <a href="https://yarncon.com/" target="_blank"><button>View Website</button></a>
        </div>
        <div className="grid-item">
          <img src={eventFour} className='image-style'/>
           <Cards title='Nash Yarn Fest Getaway | Nashville, TN' 
                 date='April 16-20, 2026' 
                 description='A premier 4-night, VIP fiber experience in Nashville, TN, hosted by Modern Daily Knitting and curated by Yarn Culture. It features stays at the Fairlane Hotel, exclusive access to over 95 vendors, intimate talks, a Friday night Hootenanny with line dancing, and a Grand Ole Opry show'/>
          <a href="https://www.nashyarnfest.com/pages/nyf-getaway-2026" target="_blank"><button>View Website</button></a>
        </div>
        <div className="grid-item">
          <img src={eventFive} className='image-style'/>
          <Cards title='Maryland Sheep and Wool | West Friendship, MD' 
                 date='May 2-3, 2026' 
                 description='One of the nations largest, premier festivals celebrating sheep, wool, and fiber arts, held annually. It features over 250 vendors, 600+ sheep, workshops, and competitions, drawing fiber enthusiasts for shopping, livestock shows, and educational demonstrations.'/>
          <a href="https://sheepandwool.org/" target="_blank"><button>View Website</button></a>
        </div>
        <div className="grid-item">
          <img src={eventSix} className='image-style'/>
          <Cards title='FibreFest | Almonte, ON' 
                 date='September 12-13, 2026' 
                 description='A major annual textile arts festival in Almonte, ON, hosted by the Mississippi Valley Textile Museum. Held at the John Levi Community Centre and museum, it features over 80 vendors, sheep-to-shawl competitions, workshops (felting, spinning), and live demonstrations.'/>
          <a href="https://mvtm.ca/whats-on/fibrefest/" target="_blank"><button>View Website</button></a>
        </div>
        <div className="grid-item">
          <img src={eventSeven} className='image-style'/>
          <Cards title='Flock Fiber Festival | Seattle, WA' 
                 date='July 31- August 2, 2026' 
                 description='A premier weekend event in Seattle, WA (held at the Summit Building, Seattle Convention Center), celebrating fiber arts with over 100 vendors, hands-on classes, and community meetups for knitters, crocheters, and spinners'/>
          <a href="https://flockfiberfestival.com/" target="_blank"><button>View Website</button></a>
        </div>
        <div className="grid-item">
          <img src={eventEight} className='image-style'/>
          <Cards title='Beachburg Fibre Fest | Beachburg, ON' 
                 date='Septeber 20th, 2026' 
                 description='A charming, community-focused event celebrating rural life and fiber arts, featuring interactive demonstrations (spinning, weaving, felting), a vendor show, and an artisan craft market. Located at the fairgrounds, it highlights locally produced fiber products, workshops, and a sheep show.'/>
          <a href="https://beachburgfair.ca/field-to-fibre-festival-2024/" target="_blank"><button>View Website</button></a>
        </div>
        <div className="grid-item">
          <img src={eventNine} className='image-style'/>
          <Cards title='New York Sheep and Wool Festival | Rhinebeck, NY' 
                 date='October 18-19, 2026' 
                 description='One of the largest fiber festivals in the U.S., featuring hundreds of vendors selling yarn, fiber, and handmade goods, alongside livestock shows, workshops, and agricultural education. Join us for our two-day event held at the Dutchess County Fairgrounds in Rhinebeck, NY.'/>
          <a href="https://sheepandwool.com/" target="_blank"><button>View Website</button></a>
        </div>
        <div className="grid-item">
          <img src={eventTen} className='image-style'/>
          <Cards title='Wool and Fiber Festival | Bloomington, IN' 
                 date='October 2-3, 2026' 
                 description='We host an annual festival to celebrate our region’s deep-rooted tradition in wool production and the vibrant passion of fiber arts! The festival includes hands-on workshops, in-person fiber arts demonstrations, fleece and skein competitions, and over 30 curated vendors offering beautiful wool and fiber arts supplies, equipment, and more. '/>
          <a href="https://woolandfiberfestival.org/" target="_blank"><button>View Website</button></a>
        </div>
      </div>
    </>
  )
}
{/*Alternative Gif link: https://drive.google.com/file/d/1tkbG_YKFdGsnYu1XvaZ9YpTs_I1BRcKr/view?usp=drivesdk*/}

export default App
