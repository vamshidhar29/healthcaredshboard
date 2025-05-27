import React from "react";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import "../styles/UpcomingSchedule.css";

const UpcomingSchedule = () => {
    return (
        <div className="row">
            <div className="upcoming-schedule col-12">
                <h2>The Upcoming Schedule</h2>

                <div className="schedule-group">
                    <h4>On Thursday</h4>
                    <div className="card-row">
                        <SimpleAppointmentCard title="Health checkup complete" time="11:00 AM" emoji="💉" />
                        <SimpleAppointmentCard title="Ophthalmologist" time="14:00 PM" emoji="👁️" />
                    </div>
                </div>

                <div className="schedule-group">
                    <h4>On Saturday</h4>
                    <div className="card-row">
                        <SimpleAppointmentCard title="Cardiologist" time="12:00 AM" emoji="❤️" />
                        <SimpleAppointmentCard title="Neurologist" time="16:00 PM" emoji="🧑‍⚕️" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingSchedule;
