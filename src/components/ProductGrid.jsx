import React from 'react';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'یخچال ساید بای ساید', price: '۴۵,۰۰۰,۰۰۰ تومان', image: '❄️' },
    { id: 2, name: 'ماشین لباسشویی', price: '۲۵,۰۰۰,۰۰۰ تومان', image: '👕' },
    { id: 3, name: 'اجاق گاز', price: '۱۸,۰۰۰,۰۰۰ تومان', image: '🔥' },
    { id: 4, name: 'مایکروویو', price: '۸,۰۰۰,۰۰۰ تومان', image: '📦' },
    { id: 5, name: 'قهوه ساز', price: '۶,۰۰۰,۰۰۰ تومان', image: '☕' },
    { id: 6, name: 'جاروبرقی', price: '۱۲,۰۰۰,۰۰۰ تومان', image: '🧹' }
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">محصولات پرفروش</h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart">افزودن به سبد خرید</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
