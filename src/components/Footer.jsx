import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>طوسی</h3>
            <p>مرجع تخصصی لوازم خانگی با بیش از ۲۰ سال سابقه</p>
          </div>
          <div className="footer-section">
            <h4>دسترسی سریع</h4>
            <a href="#products">محصولات</a>
            <a href="#about">درباره ما</a>
            <a href="#contact">تماس با ما</a>
          </div>
          <div className="footer-section">
            <h4>تماس با ما</h4>
            <p>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
            <p>آدرس: تهران، خیابان ولیعصر</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© ۲۰۲۴ فروشگاه لوازم خانگی طوسی. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
