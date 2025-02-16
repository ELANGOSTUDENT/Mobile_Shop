// import './Homepage.css'; // Import the external CSS file
// import mobile from '../assets/mobile.jpeg';
// import included from '../assets/repair.jpeg';
// import accessories from '../assets/accessories.jpeg';
// import exchange from '../assets/exchange.jpeg';

// const HomePage = () => {
//   return (
//     <main>
//       {/* Welcome Section */}
//       <section id="welcome" className="welcome-section">
//         <h1>Welcome to My Mobile Shop</h1>
//         <p>Discover amazing features and services.</p>
//         <img src={mobile} alt="Hero" className="hero-image" />
//       </section>

//       {/* Services Section */}
//       <section className="small-image-section">
//         <h2>Our Services</h2>
//         <div className="small-image-container">
//           <div className="small-card">
//             <img src={included} alt="Included" className="small-image" />
//             <p className="small-title">Repair</p>
//           </div>
//           <div className="small-card">
//             <img src={accessories} alt="Accessories" className="small-image" />
//             <p className="small-title">Accessories</p>
//           </div>
//           <div className="small-card">
//             <img src={exchange} alt="Exchange" className="small-image" />
//             <p className="small-title">Warrenty</p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default HomePage;
import './Homepage.css'; 
import image1 from '../assets/mobile.jpg';
import image2 from '../assets/image1.jpg';
import image3 from '../assets/image2.jpg';
import repair from '../assets/repair.jpeg';
import accessories from '../assets/accessories.jpeg';
import exchange from '../assets/exchange.jpeg';
import sell from '../assets/sell.jpeg';
import buy from '../assets/buy.jpeg';
import recycle from '../assets/recycle.jpeg';
import BookService from './Addservice';
import TrackService from './TrackingService';
import { useState ,useEffect} from 'react';
const HomePage = () => {
  const [showBookService, setShowBookService] = useState(false);
  const [showTrackService, setShowTrackService] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1, image2, image3]; // Array of images for the slideshow

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);
  const handleBookServiceClick = () => {
    setShowBookService(!showBookService);
  };

  const handleTrackServiceClick = () => {
    setShowTrackService(!showTrackService);
  }
  return (
    <main>
      {/* Welcome Section */}
      {/* <section id="welcome" className="welcome-section">
        <h1>Welcome to My Mobile Shop</h1>
        <p>Discover amazing features and services.</p>
        <img src={mobile} alt="Hero" className="hero-image" />
      </section> */}
      <section id="welcome" className="welcome-section">
        <h1>Welcome to My Mobile Shop</h1>
        <p>Discover amazing features and services.</p>
        <div className="slideshow-container">
          <img
            src={images[currentImageIndex]}
            alt={`Hero ${currentImageIndex + 1}`}
            className="hero-image"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <img src={sell} alt="Sell Phone" />
            <p>Sell Phone</p>
          </div>
          <div className="service-card">
            <img src={buy} alt="Buy Phone" />
            <p>Buy Phone</p>
          </div>
          <div className="service-card">
            <img src={repair} alt="Repair Phone" />
            <p>Repair Phone</p>
          </div>
          <div className="service-card">
            <img src={accessories} alt="Accessories" />
            <p>Buy Accessories</p>
          </div>
          <div className="service-card">
            <img src={exchange} alt="Warranty" />
            <p>Warranty</p>
          </div>
          
          <div className="service-card">
            <img src={recycle} alt="Recycle" />
            <p>Recycle</p>
          </div>
        </div>
      </section>
      <section className="service-actions-section">
        <button className="book-service-button" onClick={handleBookServiceClick}>
          Book a Service
        </button>
        <button className="track-service-button" onClick={handleTrackServiceClick}>
          Track Your Service
        </button>
        {showBookService && <BookService />}
        {showTrackService && <TrackService />}
      </section>
      
    </main>
  );
};

export default HomePage;
