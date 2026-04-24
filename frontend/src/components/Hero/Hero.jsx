import React from 'react';
import './Hero.css';
import bgImage from '../../assets/bg.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={bgImage} alt="Arctic Mountain" />
        <div className="overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <p className="series-tag">// SERIES: STAGES 01 // ARTIC</p>
          <h1 className="main-title">COLLECTION <br /> ARTIC 01™</h1>

          <div className="product-options">
            <div className="option-group">
              <label>Size</label>
              <div className="values">
                <span className="inactive">S</span>
                <span className="active">M</span>
                <span className="inactive">L</span>
                <span className="inactive">XL</span>
              </div>
            </div>
            <div className="option-group">
              <label>Colour</label>
              <div className="values">
                <span className="inactive">MATTE</span>
                <span className="active-underline">SILVER</span>
              </div>
            </div>
          </div>

          <div className="purchase-area">
            <button className="add-btn">↗</button>
            <div className="price-info">
              <span className="label">Add to Cart</span>
              <span className="price">$899.99</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="glass-preview">
            <img src={bgImage} alt="Thumbnail" />
            <div className="pagination">01 — 07</div>
          </div>
        </div>
      </div>

      <div className="social-footer">
        <span>IG</span>
        <span>FB</span>
        <span>TW</span>
      </div>
    </section>
  );
};

export default Hero;