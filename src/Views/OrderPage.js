// src/Views/OrderPage.js
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './OrderPage.css';
import leafsImage from '../assets/images/leafs.png';

const OrderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    selectedItems: [],
    selectedCatering: [],
    comments: ''
  });

  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [customerName, setCustomerName] = useState('');

  const menuItems = {
    'Main Dishes': [
      { id: 1, name: 'Egusi Soup', price: '$15.99' },
      { id: 2, name: 'Jollof Rice', price: '$13.99' },
      { id: 12, name: 'Beans and Plantain', price: '$14.99' }
    ],
    'Sides & Appetizers': [
      { id: 3, name: 'Suya', price: '$12.99' },
      { id: 4, name: 'Meat Pie', price: '$5.99' },
      { id: 5, name: 'Fish Pie', price: '$6.99' },
      { id: 6, name: 'Fried Plantains', price: '$4.99' },
      { id: 7, name: 'Puff Puff', price: '$3.99' },
      { id: 11, name: 'Moi Moi', price: '$7.99' }
    ],
    'Soups': [
      { id: 8, name: 'Catfish Pepper Soup', price: '$16.99' },
      { id: 9, name: 'Goat Pepper Soup', price: '$17.99' },
      { id: 10, name: 'Vegetable Soup', price: '$12.99' }
    ]
  };

  const cateringItems = [
    { id: 'c1', name: 'Jollof Rice', halfPan: '$45.99', fullPan: '$85.99' },
    { id: 'c2', name: 'Egusi Soup', halfPan: '$55.99', fullPan: '$99.99' },
    { id: 'c3', name: 'Beans and Plantain', halfPan: '$49.99', fullPan: '$89.99' },
    { id: 'c4', name: 'Suya', halfPan: '$59.99', fullPan: '$109.99' },
    { id: 'c5', name: 'Meat Pie', halfPan: '$49.99', fullPan: '$89.99' },
    { id: 'c6', name: 'Puff Puff', halfPan: '$35.99', fullPan: '$65.99' },
    { id: 'c7', name: 'Fried Plantains', halfPan: '$29.99', fullPan: '$54.99' },
    { id: 'c8', name: 'Moi Moi', halfPan: '$39.99', fullPan: '$74.99' },
    { id: 'c9', name: 'Goat Pepper Soup', halfPan: '$64.99', fullPan: '$119.99' },
    { id: 'c10', name: 'Catfish Pepper Soup', halfPan: '$59.99', fullPan: '$109.99' },
    { id: 'c11', name: 'Vegetable Soup', halfPan: '$49.99', fullPan: '$89.99' },
    { id: 'c12', name: 'Fish Pie', halfPan: '$52.99', fullPan: '$92.99' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleItemQuantityChange = (itemId, itemName, itemPrice, quantity) => {
    setFormData(prev => {
      const existingItemIndex = prev.selectedItems.findIndex(item => item.id === itemId);
      
      if (quantity === 0) {
        // Remove item if quantity is 0
        return {
          ...prev,
          selectedItems: prev.selectedItems.filter(item => item.id !== itemId)
        };
      }
      
      if (existingItemIndex !== -1) {
        // Update existing item quantity
        const updatedItems = [...prev.selectedItems];
        updatedItems[existingItemIndex] = { 
          id: itemId, 
          name: itemName, 
          price: itemPrice, 
          quantity: quantity 
        };
        return {
          ...prev,
          selectedItems: updatedItems
        };
      } else {
        // Add new item with quantity
        return {
          ...prev,
          selectedItems: [...prev.selectedItems, { 
            id: itemId, 
            name: itemName, 
            price: itemPrice, 
            quantity: quantity 
          }]
        };
      }
    });
  };

  const getItemQuantity = (itemId) => {
    const item = formData.selectedItems.find(item => item.id === itemId);
    return item ? item.quantity : 0;
  };

  const handleCateringQuantityChange = (itemId, itemName, panSize, price, quantity) => {
    setFormData(prev => {
      const existingItemIndex = prev.selectedCatering.findIndex(item => item.id === itemId && item.panSize === panSize);
      
      if (quantity === 0) {
        // Remove item if quantity is 0
        return {
          ...prev,
          selectedCatering: prev.selectedCatering.filter(item => !(item.id === itemId && item.panSize === panSize))
        };
      }
      
      if (existingItemIndex !== -1) {
        // Update existing item quantity
        const updatedCatering = [...prev.selectedCatering];
        updatedCatering[existingItemIndex] = { 
          id: itemId, 
          name: itemName, 
          panSize, 
          price, 
          quantity: quantity 
        };
        return {
          ...prev,
          selectedCatering: updatedCatering
        };
      } else {
        // Add new item with quantity
        return {
          ...prev,
          selectedCatering: [...prev.selectedCatering, { 
            id: itemId, 
            name: itemName, 
            panSize, 
            price, 
            quantity: quantity 
          }]
        };
      }
    });
  };

  const getCateringQuantity = (itemId, panSize) => {
    const item = formData.selectedCatering.find(item => item.id === itemId && item.panSize === panSize);
    return item ? item.quantity : 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init('xD9jHwHxB7nQPFl0h');
      
      // Prepare order details for email
      const orderDetails = {
        customerName: formData.name,
        customerEmail: formData.email,
        orderDate: formData.date,
        orderItems: formData.selectedItems.map(item => {
          const quantity = item.quantity || 1;
          const price = parseFloat(item.price.replace('$', ''));
          const totalPrice = (price * quantity).toFixed(2);
          return `${item.name} ${quantity > 1 ? `(x${quantity})` : ''} - $${totalPrice}`;
        }).join('\n'),
        cateringItems: formData.selectedCatering.map(item => {
          const quantity = item.quantity || 1;
          const price = parseFloat(item.price.replace('$', ''));
          const totalPrice = (price * quantity).toFixed(2);
          return `${item.name} (${item.panSize} pan) ${quantity > 1 ? `(x${quantity})` : ''} - $${totalPrice}`;
        }).join('\n'),
        comments: formData.comments || 'No additional comments',
        totalAmount: calculateTotal(),
        orderSummary: [
          ...formData.selectedItems.map(item => {
            const quantity = item.quantity || 1;
            const price = parseFloat(item.price.replace('$', ''));
            const totalPrice = (price * quantity).toFixed(2);
            return `${item.name} ${quantity > 1 ? `(x${quantity})` : ''} - $${totalPrice}`;
          }),
          ...formData.selectedCatering.map(item => {
            const quantity = item.quantity || 1;
            const price = parseFloat(item.price.replace('$', ''));
            const totalPrice = (price * quantity).toFixed(2);
            return `${item.name} (${item.panSize} pan) ${quantity > 1 ? `(x${quantity})` : ''} - $${totalPrice}`;
          })
        ].join('\n')
      };
      
      // Send email to restaurant owner
      await emailjs.send(
        'service_iezvzeg',
        'template_96ly2xd',
        {
          to_email: 'ikeokoye617@gmail.com',
          to_name: 'AfroBites Owner',
          from_name: 'AfroBites Order System',
          customer_name: formData.name,
          customer_email: formData.email,
          order_date: formData.date,
          order_items: orderDetails.orderSummary,
          comments: orderDetails.comments,
          total_amount: orderDetails.totalAmount,
          message: `New Order Received!\n\nCustomer: ${formData.name}\nEmail: ${formData.email}\nPickup/Delivery Date: ${formData.date}\n\nOrder Items:\n${orderDetails.orderSummary}\n\nTotal: $${orderDetails.totalAmount}\n\nComments: ${orderDetails.comments}\n\nPlease contact the customer to confirm the order.`
        }
      );

    // Send email to customer 
      await emailjs.send(
        'service_iezvzeg',
        'template_aoaz8j3',
        {
          to_email: formData.email,
          to_name: 'AfroBites Owner',
          from_name: 'AfroBites Order System',
          customer_name: formData.name,
          customer_email: formData.email,
          order_date: formData.date,
          order_items: orderDetails.orderSummary,
          comments: orderDetails.comments,
          total_amount: orderDetails.totalAmount,
          message: `Dear ${formData.name},\n\nThank you for your order! Here's what you requested:\n\n${orderDetails.orderSummary}\n\nTotal: $${orderDetails.totalAmount}\n\nWe will contact you shortly.`
        }
      );
      
      // Show thank you modal with customer name
      setCustomerName(formData.name);
      setShowThankYouModal(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        date: '',
        selectedItems: [],
        selectedCatering: [],
        comments: ''
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error processing your order. Please try again or contact us directly.');
    }
  };

  const closeThankYouModal = () => {
    setShowThankYouModal(false);
    setCustomerName('');
  };

  const calculateTotal = () => {
    const itemsTotal = formData.selectedItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      const quantity = item.quantity || 1;
      return total + (price * quantity);
    }, 0);
    
    const cateringTotal = formData.selectedCatering.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      const quantity = item.quantity || 1;
      return total + (price * quantity);
    }, 0);
    
    return (itemsTotal + cateringTotal).toFixed(2);
  };

  return (
    <div className="order-page">
      <div className="leafs-container">
        <img src={leafsImage} alt="Floating Leafs" className="leafs-bg top-leafs" />
      </div>
      
      <div className="order-hero">
        <div className="order-hero-overlay">
          <h1>Place Your Order</h1>
          <p>Select your favorite West African dishes and we'll prepare them fresh for you</p>
        </div>
      </div>

      <div className="order-container">
        <form onSubmit={handleSubmit} className="order-form">
          {/* Customer Information */}
          <div className="form-section">
            <h2>Customer Information</h2>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred Pickup/Delivery Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
          </div>

          {/* Food Selection */}
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="form-section">
              <h2>{category}</h2>
              <div className="items-grid">
                {items.map(item => {
                  const quantity = getItemQuantity(item.id);
                  return (
                    <div key={item.id} className="item-card">
                      <div className="item-info">
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">{item.price}</span>
                      </div>
                      <div className="quantity-controls">
                        <button 
                          type="button"
                          className="quantity-btn minus"
                          onClick={() => handleItemQuantityChange(item.id, item.name, item.price, Math.max(0, quantity - 1))}
                          disabled={quantity === 0}
                        >
                          -
                        </button>
                        <span className="quantity-display">{quantity}</span>
                        <button 
                          type="button"
                          className="quantity-btn plus"
                          onClick={() => handleItemQuantityChange(item.id, item.name, item.price, quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Catering Options */}
          <div className="form-section">
            <h2>Catering Options</h2>
            <p className="catering-description">
              Perfect for events and gatherings. Half pans serve 8-10 people, full pans serve 15-20 people. 
              Please order at least 48 hours in advance.
            </p>
            <div className="catering-grid">
              <div className="catering-header">
                <span>Item</span>
                <span>Half Pan (8-10 people)</span>
                <span>Full Pan (15-20 people)</span>
              </div>
              {cateringItems.map(item => {
                const halfPanQuantity = getCateringQuantity(item.id, 'half');
                const fullPanQuantity = getCateringQuantity(item.id, 'full');
                return (
                  <div key={item.id} className="catering-row">
                    <span className="catering-item-name">{item.name}</span>
                    <div className="catering-option">
                      <div className="catering-price-label">{item.halfPan}</div>
                      <div className="quantity-controls">
                        <button 
                          type="button"
                          className="quantity-btn minus"
                          onClick={() => handleCateringQuantityChange(item.id, item.name, 'half', item.halfPan, Math.max(0, halfPanQuantity - 1))}
                          disabled={halfPanQuantity === 0}
                        >
                          -
                        </button>
                        <span className="quantity-display">{halfPanQuantity}</span>
                        <button 
                          type="button"
                          className="quantity-btn plus"
                          onClick={() => handleCateringQuantityChange(item.id, item.name, 'half', item.halfPan, halfPanQuantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="catering-option">
                      <div className="catering-price-label">{item.fullPan}</div>
                      <div className="quantity-controls">
                        <button 
                          type="button"
                          className="quantity-btn minus"
                          onClick={() => handleCateringQuantityChange(item.id, item.name, 'full', item.fullPan, Math.max(0, fullPanQuantity - 1))}
                          disabled={fullPanQuantity === 0}
                        >
                          -
                        </button>
                        <span className="quantity-display">{fullPanQuantity}</span>
                        <button 
                          type="button"
                          className="quantity-btn plus"
                          onClick={() => handleCateringQuantityChange(item.id, item.name, 'full', item.fullPan, fullPanQuantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Comments Section */}
          <div className="form-section">
            <h2>Additional Comments</h2>
            <div className="form-group">
              <label htmlFor="comments">Special requests, dietary restrictions, or additional notes</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                placeholder="Please let us know if you have any special requests, allergies, or dietary restrictions..."
                rows="4"
              />
            </div>
          </div>

          {/* Order Summary */}
          {(formData.selectedItems.length > 0 || formData.selectedCatering.length > 0) && (
            <div className="form-section order-summary">
              <h2>Order Summary</h2>
              <div className="selected-items">
                {formData.selectedItems.map(item => {
                  const quantity = item.quantity || 1;
                  const price = parseFloat(item.price.replace('$', ''));
                  const totalPrice = (price * quantity).toFixed(2);
                  return (
                    <div key={item.id} className="summary-item">
                      <span>{item.name} {quantity > 1 ? `(x${quantity})` : ''}</span>
                      <span>${totalPrice}</span>
                    </div>
                  );
                })}
                {formData.selectedCatering.map(item => {
                  const quantity = item.quantity || 1;
                  const price = parseFloat(item.price.replace('$', ''));
                  const totalPrice = (price * quantity).toFixed(2);
                  return (
                    <div key={`${item.id}-${item.panSize}`} className="summary-item">
                      <span>{item.name} ({item.panSize} pan) {quantity > 1 ? `(x${quantity})` : ''}</span>
                      <span>${totalPrice}</span>
                    </div>
                  );
                })}
              </div>
              <div className="total">
                <strong>Total: ${calculateTotal()}</strong>
              </div>
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={!formData.name || !formData.email || !formData.date || (formData.selectedItems.length === 0 && formData.selectedCatering.length === 0)}>
            Place Order
          </button>
        </form>
      </div>

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="modal-overlay" onClick={closeThankYouModal}>
          <div className="thank-you-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <h2>Thank You!</h2>
              <p>Thank you, <strong>{customerName}</strong>, for ordering with AfroBites!</p>
              <p>Order confirmation has been sent to your email. We will contact you soon to confirm your order details.</p>
              <button className="modal-close-btn" onClick={closeThankYouModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
