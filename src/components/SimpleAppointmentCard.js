import React from "react";
import "../styles/SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ title, time, emoji }) => {
  return (
    <div className="simple-appointment-card">
      <div className="title">
        {title} <span className="emoji">{emoji}</span>
      </div>
      <div className="time">{time}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
