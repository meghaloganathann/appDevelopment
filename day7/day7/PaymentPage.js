import React, { useState } from 'react';

function PaymentPage() {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = (event) => {
    event.preventDefault();
    // Simulating payment processing
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };

  const renderPaymentStatus = () => {
    if (paymentStatus === 'success') {
      return <p>Payment Successful!</p>;
    }
    return null;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1>Payment Page</h1>
      <form
        onSubmit={handlePayment}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          placeholder="Card Number"
          style={{ margin: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Expiry Date"
          style={{ margin: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="CVV"
          style={{ margin: '10px', padding: '5px' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="card"
              required
            />
            Card Payment
          </label>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="cod"
              required
            />
            Cash on Delivery
          </label>
        </div>
        <button
          type="submit"
          style={{
            margin: '10px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Pay Now
        </button>
      </form>
      {renderPaymentStatus()}
    </div>
  );
}

export default PaymentPage;
