// import React, { useState } from 'react';
// import './CarBookingForm.css';

// const CarBookingForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [pickupDate, setPickupDate] = useState('');
//   const [returnDate, setReturnDate] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     console.log('Form submitted');
//   };

//   return (
//     <div className="car-booking-form">
//       <h2>Car Booking Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label htmlFor="phone">Phone:</label>
//         <input
//           type="tel"
//           id="phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />

//         <label htmlFor="pickupDate">Pickup Date:</label>
//         <input
//           type="date"
//           id="pickupDate"
//           value={pickupDate}
//           onChange={(e) => setPickupDate(e.target.value)}
//           required
//         />

//         <label htmlFor="returnDate">Return Date:</label>
//         <input
//           type="date"
//           id="returnDate"
//           value={returnDate}
//           onChange={(e) => setReturnDate(e.target.value)}
//           required
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CarBookingForm;
// import React, { useState } from 'react';
// import './CarBookingForm.css';

// const CarBookingForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [pickupDate, setPickupDate] = useState('');
//   const [returnDate, setReturnDate] = useState('');
//   const [serviceAddOns, setServiceAddOns] = useState([]);
//   const [location, setLocation] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     console.log('Form submitted');
//   };

//   const handleServiceAddOnsChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setServiceAddOns((prevAddOns) => [...prevAddOns, value]);
//     } else {
//       setServiceAddOns((prevAddOns) =>
//         prevAddOns.filter((addOn) => addOn !== value)
//       );
//     }
//   };

//   return (
//     <div className="car-booking-form">
//       <h2>BOOK NOW</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label htmlFor="phone">Phone:</label>
//         <input
//           type="tel"
//           id="phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />

//         <label htmlFor="pickupDate">Pickup Date:</label>
//         <input
//           type="date"
//           id="pickupDate"
//           value={pickupDate}
//           onChange={(e) => setPickupDate(e.target.value)}
//           required
//         />

//         <label htmlFor="returnDate">Return Date:</label>
//         <input
//           type="date"
//           id="returnDate"
//           value={returnDate}
//           onChange={(e) => setReturnDate(e.target.value)}
//           required
//         />

//         <label htmlFor="serviceAddOns">Service Add-ons:</label>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               value="carWash"
//               onChange={handleServiceAddOnsChange}
//             />
//             Car Wash
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="interiorCleaning"
//               onChange={handleServiceAddOnsChange}
//             />
//             Interior Cleaning
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="fluidTopUps"
//               onChange={handleServiceAddOnsChange}
//             />
//             Fluid Top-ups
//           </label>
//         </div>

//         <label htmlFor="location">Location:</label>
//         <input
//           type="text"
//           id="location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           required
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CarBookingForm;
// import React, { useState } from 'react';
// import './CarBookingForm.css';

// const CarBookingForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [pickupDate, setPickupDate] = useState('');
//   const [returnDate, setReturnDate] = useState('');
//   const [serviceAddOns, setServiceAddOns] = useState([]);
//   const [location, setLocation] = useState('');
//   const [registrationNumber, setRegistrationNumber] = useState('');
//   const [carModel, setCarModel] = useState('');
//   const [emergencyNumber, setEmergencyNumber] = useState('');
//   const [numVehicles, setNumVehicles] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     console.log('Form submitted');
//   };

//   const handleServiceAddOnsChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setServiceAddOns((prevAddOns) => [...prevAddOns, value]);
//     } else {
//       setServiceAddOns((prevAddOns) =>
//         prevAddOns.filter((addOn) => addOn !== value)
//       );
//     }
//   };

//   return (
//     <div className="car-booking-form">
//       <h2>BOOK NOW</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label htmlFor="phone">Phone:</label>
//         <input
//           type="tel"
//           id="phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />

//         <label htmlFor="pickupDate">Pickup Date:</label>
//         <input
//           type="date"
//           id="pickupDate"
//           value={pickupDate}
//           onChange={(e) => setPickupDate(e.target.value)}
//           required
//         />

//         <label htmlFor="returnDate">Return Date:</label>
//         <input
//           type="date"
//           id="returnDate"
//           value={returnDate}
//           onChange={(e) => setReturnDate(e.target.value)}
//           required
//         />

//         <label htmlFor="serviceAddOns">Service Add-ons:</label>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               value="carWash"
//               onChange={handleServiceAddOnsChange}
//             />
//             Car Wash
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="interiorCleaning"
//               onChange={handleServiceAddOnsChange}
//             />
//             Interior Cleaning
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="fluidTopUps"
//               onChange={handleServiceAddOnsChange}
//             />
//             Fluid Top-ups
//           </label>
//         </div>

//         <label htmlFor="location">Location:</label>
//         <input
//           type="text"
//           id="location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           required
//         />

//         <label htmlFor="registrationNumber">Registration Number:</label>
//         <input
//           type="text"
//           id="registrationNumber"
//           value={registrationNumber}
//           onChange={(e) => setRegistrationNumber(e.target.value)}
//           required
//         />

//         <label htmlFor="carModel">Car Model:</label>
//         <select
//           id="carModel"
//           value={carModel}
//           onChange={(e) => setCarModel(e.target.value)}
//           required
//         >
//           <option value="">Select Car Model</option>
//           <option value="model1">Model 1</option>
//           <option value="model2">Model 2</option>
//           <option value="model3">Model 3</option>
//           {/* Add more options for different car models */}
//         </select>

//         <label htmlFor="emergencyNumber"> Emergency Number:</label>
//         <input
//           type="tel"
//           id="emergencyNumber"
//           value={emergencyNumber}
//           onChange={(e) => setEmergencyNumber(e.target.value)}
//           required
//         />

//         <label htmlFor="numVehicles">Number of Vehicles (Max 3):</label>
//         <input
//           type="number"
//           id="numVehicles"
//           min="1"
//           max="3"
//           value={numVehicles}
//           onChange={(e) => setNumVehicles(e.target.value)}
//           required
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CarBookingForm;
import React, { useState } from 'react';
import './CarBookingForm.css';

const CarBookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [serviceAddOns, setServiceAddOns] = useState([]);
  const [location, setLocation] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [carModel, setCarModel] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState('');
  const [numVehicles, setNumVehicles] = useState('');
  const [selectedService, setSelectedService] = useState('');

  // Array of car models
  const carModels = ['Maruti', 'Toyota', 'Honda', 'Hyundai', 'Ford', 'BMW', 'Mercedes', 'Audi'];

  // List of available services
  const services = [
    { id: 'oilChange', label: 'Oil Change' },
    { id: 'tireRotation', label: 'Tire Rotation' },
    { id: 'brakeInspection', label: 'Brake Inspection' },
    { id: 'engineTuneUp', label: 'Engine Tune-Up' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted');
  };

  const handleServiceAddOnsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setServiceAddOns((prevAddOns) => [...prevAddOns, value]);
    } else {
      setServiceAddOns((prevAddOns) =>
        prevAddOns.filter((addOn) => addOn !== value)
      );
    }
  };

  return (
    <div className="car-booking-form">
      <h2>BOOK NOW</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="pickupDate">Pickup Date:</label>
        <input
          type="date"
          id="pickupDate"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          required
        />

        <label htmlFor="returnDate">Return Date:</label>
        <input
          type="date"
          id="returnDate"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
        />
<br></br><br></br>
        <label htmlFor="serviceAddOns">Service Add-ons:</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="carWash"
              onChange={handleServiceAddOnsChange}
            />
            Car Wash
          </label>
          <label>
            <input
              type="checkbox"
              value="interiorCleaning"
              onChange={handleServiceAddOnsChange}
            />
            Interior Cleaning
          </label>
          <label>
            <input
              type="checkbox"
              value="fluidTopUps"
              onChange={handleServiceAddOnsChange}
            />
            Fluid Top-ups
          </label>
        </div>
<br></br>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <label htmlFor="registrationNumber">Registration Number:</label>
        <input
          type="text"
          id="registrationNumber"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
        />

        <label htmlFor="carModel">Car Model:</label>
        <select
          id="carModel"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          required
        >
          <option value="">Select Car Model</option>
          {carModels.map((model, index) => (
            <option key={index} value={model}>
              {model}
            </option>
          ))}
        </select>
        <br></br><br></br>

        <label htmlFor="emergencyNumber">Emergency Number:</label>
        <input
          type="tel"
          id="emergencyNumber"
          value={emergencyNumber}
          onChange={(e) => setEmergencyNumber(e.target.value)}
          required
        />

        <label htmlFor="numVehicles">Number of Vehicles (Max 1):</label>
        <input
          type="number"
          id="numVehicles"
          min="1"
          max="1"
          value={numVehicles}
          onChange={(e) => setNumVehicles(e.target.value)}
          required
        />
<br></br><br></br>
        <label htmlFor="selectedService">Select Service:</label>
        <select
          id="selectedService"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
        >
          <option value="">Select Service</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.label}
            </option>
          ))}
        </select>
<br></br><br></br><br></br><br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CarBookingForm;

