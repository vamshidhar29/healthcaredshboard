import { FaLungs } from "react-icons/fa";
import { FaTooth } from "react-icons/fa";
import { BiSolidBone } from "react-icons/bi";

const HealthStatusCards = () => {
    return (
        <div className="d-flex flex-column align-items-start gap-2 p-2">

            <div className="d-flex flex-column rounded-4 p-2" style={{backgroundColor: "#e3f1fc"}}>
                <div className="d-flex flex-row gap-3">
                    <FaLungs style={{ color: "#fc3232", height: "25px", width: "25px" }} />
                    <h6>Lungs</h6>
                </div>
                <p style={{color: "#b9bcbd", fontSize: '15px'}}>Date: 26 oct 2021</p>
                <div
                    style={{
                        height: "10px",
                        width: "100%",
                        backgroundColor: "#e0e0e0",
                        borderRadius: "5px",
                        overflow: "hidden"
                    }}
                >
                    <div
                        style={{
                            height: "100%",
                            width: `70%`,
                            backgroundColor: "#4caf50",
                            transition: "width 0.3s ease-in-out"
                        }}
                    ></div>
                </div>
            </div>

            <div className="d-flex flex-column rounded-4 p-2" style={{backgroundColor: "#e3f1fc"}}>
                <div className="d-flex flex-row gap-3">
                    <FaTooth style={{color: "#ffffff", height: "25px", width: "25px" }} />
                    <h6>Teeth</h6>
                </div>
                <p style={{color: "#b9bcbd", fontSize: '15px'}}>Date: 26 oct 2021</p>
                <div
                    style={{
                        height: "10px",
                        width: "100%",
                        backgroundColor: "#e0e0e0",
                        borderRadius: "5px",
                        overflow: "hidden"
                    }}
                >
                    <div
                        style={{
                            height: "100%",
                            width: `70%`,
                            backgroundColor: "#4caf50",
                            transition: "width 0.3s ease-in-out"
                        }}
                    ></div>
                </div>
            </div>

            <div className="d-flex flex-column rounded-4 p-2" style={{backgroundColor: "#e3f1fc"}}>
                <div className="d-flex flex-row gap-3">
                    <BiSolidBone style={{ color: "#a3a3a0", height: "25px", width: "25px" }} />
                    <h6>Bone</h6>
                </div>
                <p style={{color: "#b9bcbd", fontSize: '15px'}}>Date: 26 oct 2021</p>
                <div
                    style={{
                        height: "10px",
                        width: "100%",
                        backgroundColor: "#e0e0e0",
                        borderRadius: "5px",
                        overflow: "hidden"
                    }}
                >
                    <div
                        style={{
                            height: "100%",
                            width: `70%`,
                            backgroundColor: "#4caf50",
                            transition: "width 0.3s ease-in-out"
                        }}
                    ></div>
                </div>
            </div>

            <span className="align-self-end" style={{color: "#575757"}}>Details 
                <i className="bi bi-arrow-right"></i>
            </span>

        </div>
    )
};

export default HealthStatusCards;