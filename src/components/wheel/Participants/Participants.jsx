import React, { useState, useEffect } from 'react';
import './Participants.css';

const Participants = ({ currentData, isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (!currentData || !Array.isArray(currentData)) return;

    const filtered = currentData.filter(p =>
      p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.ticketNumber?.toString().includes(searchTerm) ||
      p.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(filtered);
  }, [searchTerm, currentData]);

  if (!isOpen) return null;

  return (
    <>
      <div className="spin-wheel-participants-overlay" onClick={onClose}></div>
      <div className={`spin-wheel-participants-section ${isOpen ? 'spin-wheel-participants-open' : ''}`}>
        <div className="spin-wheel-participants-header">
          <h2>Participants</h2>
          <button className="spin-wheel-participants-close-button" onClick={onClose}>×</button>
        </div>
        <div className="spin-wheel-participants-search-container">
          <input
            type="text"
            className="spin-wheel-search-box"
            placeholder="Search participants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="spin-wheel-participants-list">
          {filteredList.length > 0 ? (
            filteredList.map(participant => (
              <div className="spin-wheel-participant-item" key={participant.ticketNumber} data-ticketnumber={participant.ticketNumber}>
                <div>{participant.name}</div>
                <div className="spin-wheel-participant-ticketNumber">{participant.ticketNumber}</div>
              </div>
            ))
          ) : (
            <p>No participants found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Participants;

