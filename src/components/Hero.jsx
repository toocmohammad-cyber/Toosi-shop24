import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            لوازم خانگی <span className="highlight">طوسی</span>
          </h1>
          <p className="hero-description">
            بهترین برندهای لوازم خانگی با قیمت مناسب و گارانتی معتبر
          </p>
          <button className="cta-button">مشاهده محصولات</button>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">🎯</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
