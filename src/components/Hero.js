import "./Hero.css";

const Hero = () => {
  return (
    <section className="main-container">
      <div className="hero-elememts">
        <div className="hero-text-container">
          <h1 className="title">Little Lemon</h1>
          <h3 className="location">Chicago</h3>
          <h6 className="description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </h6>
          <button className="cta-button">Reserve A Table</button>
        </div>
      </div>
      <div>
        <img
          src="restauranfood.jpg"
          alt="restaurant food"
          width={404}
          height={457}
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
