const HeroSection = () => {
    return ( 
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>Make you feel better and classy</p> 
          <div className="hero-btn">
            <button>Shop Now</button>
            <button classname="secondary-btn">Category</button>
          </div>
          <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
              <img src="/Images/amazon.png" alt="Amazon logo" />
              <img src="/Images/flipkart.png" alt="Flipkart logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/Images/hero-image.png" alt="Shoe Image" />
        </div>
      </main>
    );
  }
  
  export default HeroSection;
  