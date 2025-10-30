import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-icon">⚡</div>
          <span className="logo-text">طوسی</span>
        </div>
        <nav className="nav">
          <a href="#products">محصولات</a>
          <a href="#about">درباره ما</a>
          <a href="#contact">تماس با ما</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
