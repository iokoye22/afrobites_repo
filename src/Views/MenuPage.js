// src/Views/MenuPage.js
import React, { useEffect } from 'react';
import './MenuPage.css';
import menuTopPhoto from '../assets/images/menu_top_photo.jpg';
import leafsImage from '../assets/images/leafs.png';
import egusiImage from '../assets/images/egusi.png';
import jollofImage from '../assets/images/jollof_v1.png';
import suyaImage from '../assets/images/suya.png';
import meatPieImage from '../assets/images/meat_pie.jpg';
import fishPieImage from '../assets/images/fish_pie.jpg';
import plantainsImage from '../assets/images/plantains.webp';
import puffImage from '../assets/images/puff.png';
import moiMoiImage from '../assets/images/moi_moi.jpg';
import beansPlantainImage from '../assets/images/Beans.webp';
import catfishPepperSoupImage from '../assets/images/catfish_pepper_soup.png';
import goatPepperSoupImage from '../assets/images/goat_pepper_soup.png';
import veggieSoupImage from '../assets/images/veggie_soup.png';

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const menuItems = [
    { id: 1, name: 'Egusi Soup', description: 'Traditional West African soup made with ground melon seeds, vegetables, and choice of protein.', price: '$15.99', image: egusiImage, category: 'Main Dishes' },
    { id: 2, name: 'Jollof Rice', description: 'Flavorful one-pot rice dish cooked in a rich tomato and pepper sauce with aromatic spices.', price: '$13.99', image: jollofImage, category: 'Main Dishes' },
    { id: 12, name: 'Beans and Plantain', description: 'Traditional Nigerian dish featuring slow-cooked black-eyed beans in a rich tomato sauce, served with fried sweet plantains.', price: '$14.99', image: beansPlantainImage, category: 'Main Dishes' },
    { id: 3, name: 'Suya', description: 'Spicy skewered meat seasoned with a unique blend of ground peanuts and spices.', price: '$12.99', image: suyaImage, category: 'Sides & Appetizers' },
    { id: 4, name: 'Meat Pie', description: 'Savory pastry filled with seasoned minced meat, potatoes, and carrots.', price: '$5.99', image: meatPieImage, category: 'Sides & Appetizers' },
    { id: 5, name: 'Fish Pie', description: 'Flaky pastry filled with seasoned fish, herbs, and vegetables.', price: '$6.99', image: fishPieImage, category: 'Sides & Appetizers' },
    { id: 6, name: 'Fried Plantains', description: 'Sweet ripe plantains, fried to golden perfection.', price: '$4.99', image: plantainsImage, category: 'Sides & Appetizers' },
    { id: 7, name: 'Puff Puff', description: 'Sweet, deep-fried dough balls - a popular West African snack.', price: '$3.99', image: puffImage, category: 'Sides & Appetizers' },
    { id: 11, name: 'Moi Moi', description: 'Steamed bean pudding made from a mixture of washed and peeled black-eyed beans, onions, and fresh ground peppers.', price: '$7.99', image: moiMoiImage, category: 'Sides & Appetizers' },
    { id: 8, name: 'Catfish Pepper Soup', description: 'Spicy and aromatic soup made with fresh catfish and traditional spices.', price: '$16.99', image: catfishPepperSoupImage, category: 'Soups' },
    { id: 9, name: 'Goat Pepper Soup', description: 'Hearty and spicy soup made with tender goat meat and a blend of African spices.', price: '$17.99', image: goatPepperSoupImage, category: 'Soups' },
    { id: 10, name: 'Vegetable Soup', description: 'Nutritious soup made with a variety of fresh vegetables and traditional spices.', price: '$12.99', image: veggieSoupImage, category: 'Soups' }
  ];

  const categories = [...new Set(menuItems.map(item => item.category))];

  return (
    <div className="menu-page">
      <div className="leafs-container">
        <img src={leafsImage} alt="Floating Leafs" className="leafs-bg top-leafs" />
      </div>
      <div className="menu-hero">
        <img src={menuTopPhoto} alt="Delicious African Food" className="menu-hero-image" />
        <div className="menu-hero-overlay">
          <h1>Our Menu</h1>
          <p>Authentic West African cuisine made with love</p>
        </div>
      </div>

      <div className="menu-container">
        {categories.map(category => (
          <div key={category} className="menu-category">
            <h2>{category}</h2>
            <div className="menu-items">
              {menuItems
                .filter(item => item.category === category)
                .map(item => (
                  <div key={item.id} className="menu-item">
                    <div className="menu-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="menu-item-info">
                      <div className="menu-item-header">
                        <h3>{item.name}</h3>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      <p>{item.description}</p>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Catering Options Section */}
        <div className="menu-category">
          <h2>Catering Options</h2>
          <p className="catering-description">
            Our catering options are perfect for events and gatherings. All dishes are served in your choice of full pans (serves 15-20) or half pans (serves 8-10). Please order at least 48 hours in advance.
          </p>

          <div className="catering-grid">
            <div className="catering-grid-header">
              <div className="catering-item-name">Item</div>
              <div className="catering-item-price">Half Pan</div>
              <div className="catering-item-price">Full Pan</div>
            </div>

            <div className="catering-grid-item"><div className="catering-item-name">Jollof Rice</div><div className="catering-item-price">$45.99</div><div className="catering-item-price">$85.99</div></div>
            <div className="catering-grid-item"><div className="catering-item-name">Egusi Soup</div><div className="catering-item-price">$55.99</div><div className="catering-item-price">$99.99</div></div>
            <div className="catering-grid-item"><div className="catering-item-name">Beans and Plantain</div><div className="catering-item-price">$49.99</div><div className="catering-item-price">$89.99</div></div>
            <div className="catering-grid-item"><div className="catering-item-name">Suya</div><div className="catering-item-price">$59.99</div><div className="catering-item-price">$109.99</div></div>
            <div className="catering-grid-item"><div className="catering-item-name">Meat Pie</div><div className="catering-item-price">$49.99</div><div className="catering-item-price">$89.99</div></div>
            <div className="catering-grid-item"><div className="catering-item-name">Puff Puff</div><div className="catering-item-price">$35.99</div><div className="catering-item-price">$65.99</div></div>
            <div className="catering-grid-item"><div className="catering-item-name">Fried Plantains</div><div className="catering-item-price">$29.99</div><div className="catering-item-price">$54.99</div></div>
            <div className="catering-grid-item"><div className="catering-item-name">Moi Moi</div><div className="catering-item-price">$39.99</div><div className="catering-item-price">$74.99</div></div>
            <div className="catering-grid-item"><div className="catering-item-name">Goat Pepper Soup</div><div className="catering-item-price">$64.99</div><div className="catering-item-price">$119.99</div></div>
            <div className="catering-grid-item"><div className="catering-item-name">Catfish Pepper Soup</div><div className="catering-item-price">$59.99</div><div className="catering-item-price">$109.99</div></div>
            <div className="catering-grid-item"><div className="catering-item-name">Vegetable Soup</div><div className="catering-item-price">$49.99</div><div className="catering-item-price">$89.99</div></div>
            <div className="catering-grid-item"><div className="catering-item-name">Fish Pie</div><div className="catering-item-price">$52.99</div><div className="catering-item-price">$92.99</div></div>
          </div>

          <p className="catering-note">
            For custom catering orders or special requests, please contact us at <span className="highlight">afrobitesma@gmail.com</span> or call <span className="highlight">+1 (781) 626–1955</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
