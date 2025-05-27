import React from "react";
import "../styles/CalendarView.css";
import { FaTooth } from "react-icons/fa";

const CalendarView = () => {
    const days = [
        { day: "Mon", date: 25, times: ["10:00", "11:00", "12:00"] },
        { day: "Tues", date: 26, times: ["08:00", "09:00", "10:00"] },
        { day: "Wed", date: 27, times: ["12:00", "___", "13:00"] },
        { day: "Thurs", date: 28, times: ["10:00", "11:00", "___"] },
        { day: "Fri", date: 29, times: ["___", "14:00", "16:00"] },
        { day: "Sat", date: 30, times: ["12:00", "14:00", "15:00"] },
        { day: "Sun", date: 31, times: ["09:00", "10:00", "11:00"], faded: true },
    ];

    return (
        <div className="row">
            <div className="col-12 calendar-view">
                <div className="calendar-header">
                    <span>October 2021</span>
                    <div className="calendar-nav">
                        <button>{"<"}</button>
                        <button>{">"}</button>
                    </div>
                </div>

                <div className="calendar-grid">
                    {days.map(({ day, date, times, faded }) => (
                        <div className={`calendar-day ${faded ? "faded" : ""} ${date === 26 ? "date-box selected" : ""}`} key={date}>
                            <div className={`date-box`}>
                                <div className="day-name">{day}</div>
                                <div className="day-number">{date}</div>
                            </div>
                            <div className="time-slots">
                                {times.map((time, idx) => (
                                    <div
                                        className={`time-slot ${date === 26 && time === "09:00"
                                            ? "highlight"
                                            : date === 28 && time === "11:00"
                                                ? "light-highlight"
                                                : date === 30 && ["12:00", "09:00"].includes(time)
                                                    ? "light-highlight"
                                                    : ""
                                            }`}
                                        key={idx}
                                    >
                                        {time}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="appointments">
                    <div className="appointment dentist">
                        <div className="title">
                            Dentist <FaTooth />
                        </div>
                        <div className="time">09:00–11:00</div>
                        <div className="doctor">Dr. Cameron Williamson</div>
                    </div>
                    <div className="appointment physio">
                        <div className="title">
                            Physiotherapy Appointment <span role="img">💪</span>
                        </div>
                        <div className="time">11:00–12:00</div>
                        <div className="doctor">Dr. Kevin Djones</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarView;
