import React from "react";
import "../styles/ActivityFeed.css";

const weekdays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const barConfig = {
    Mon: [50, 30, 70],
    Tues: [40, 80, 60],
    Wed: [30, 50, 20],
    Thurs: [60, 40, 30],
    Fri: [80, 70, 50],
    Sat: [50, 20, 40],
    Sun: [60, 40, 30],
};

const barColors = ["#0ED2F6", "#4C45BF", "#A3A3A3"];

const ActivityFeed = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="activity-chart">
                    <div className="chart-header">
                        <h4>Activity</h4>
                        <span>3 appointment on this week</span>
                    </div>

                    <div className="chart-bars">
                        {weekdays.map((day) => (
                            <div key={day} className="day-bar">
                                <div className="bars">
                                    <div
                                        key={day}
                                        className="bar"
                                        style={{
                                            height: `100px`,
                                            backgroundColor: '#A3A3A3',
                                        }}
                                    />
                                    {barConfig[day].map((height, idx) => (
                                        <div
                                            key={idx}
                                            className="bar"
                                            style={{
                                                height: `${height}px`,
                                                backgroundColor: barColors[idx],
                                            }}
                                        />
                                    ))}
                                </div>
                                <span className="day-label">{day}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityFeed;