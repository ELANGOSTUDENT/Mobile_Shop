
import './Homepage.css'; // Import the external CSS file
import mobile from '../assets/mobile.jpeg';


const HomePage = () => {
  return (
    <main>
      {/* Welcome Section */}
      <section id="welcome" className="welcome-section">
        <h1>Welcome to My Mobile Shop</h1>
        <p>Discover amazing features and services.</p>
        <img src={mobile} alt="Hero" className="hero-image" />
      </section>

      
      
    </main>
  );
};

export default HomePage;
