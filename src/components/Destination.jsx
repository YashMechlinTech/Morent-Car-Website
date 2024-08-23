import React, { useState } from 'react'


const Destination = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [dropoffDate, setDropoffDate] = useState('');
    const [dropoffTime, setDropoffTime] = useState('');
  
    const handlePickupLocationChange = (event) => {
      setPickupLocation(event.target.value);
    };
  
    const handlePickupDateChange = (event) => {
      setPickupDate(event.target.value);
    };
  
    const handlePickupTimeChange = (event) => {
      setPickupTime(event.target.value);
    };
  
    const handleDropoffLocationChange = (event) => {
      setDropoffLocation(event.target.value);
    };
  
    const handleDropoffDateChange = (event) => {
      setDropoffDate(event.target.value);
    };
  
    const handleDropoffTimeChange = (event) => {
      setDropoffTime(event.target.value);
    };
  
    return (
      <div className="flex gap-4">
        <div className="w-1/2">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7" />
              <path d="M18 13l-5 5-5-5" />
            </svg>
            <h3 className="text-lg font-semibold">Pick-Up</h3>
          </div>
          <div className="mt-4">
            <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">
              Locations
            </label>
            <select
              id="pickupLocation"
              value={pickupLocation}
              onChange={handlePickupLocationChange}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select your city</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="pickupDate"
              value={pickupDate}
              onChange={handlePickupDateChange}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="pickupTime"
              value={pickupTime}
              onChange={handlePickupTimeChange}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7" />
              <path d="M18 13l-5 5-5-5" />
            </svg>
            <h3 className="text-lg font-semibold">Drop-Off</h3>
          </div>
          <div className="mt-4">
            <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700">
              Locations
            </label>
            <select
              id="dropoffLocation"
              value={dropoffLocation}
              onChange={handleDropoffLocationChange}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select your city</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="dropoffDate" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="dropoffDate"
              value={dropoffDate}
              onChange={handleDropoffDateChange}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="dropoffTime" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="dropoffTime"
              value={dropoffTime}
              onChange={handleDropoffTimeChange}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="bg-white rounded-md p-4 shadow-md">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Book
          </button>
        </div>
      </div>
  )
}

export default Destination
