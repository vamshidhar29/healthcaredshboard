import { GiLeg } from "react-icons/gi";

const AnatomySection = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="rounded-4 position-relative ms-3 ms-md-2 ms-lg-5" style={{ backgroundColor: "#e3f1fc", height: "300px" }}>
                    <div className="d-flex flex-row justify-content-end">
                        <i className="bi bi-zoom-in pe-3 pt-2 fs-5"></i>
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-center pb-3">
                        <img
                            src="humanbody.jpg"
                            className="rounded-5"
                            style={{ height: "250px", width: "150px", objectFit: "cover" }}
                            alt="Human Anatomy"
                        />

                        <div
                            style={{
                                position: "absolute",
                                top: "22%",
                                left: "88%",
                                transform: "translate(-50%, -50%)",
                                backgroundColor: "#474dbf",
                                padding: "6px 12px",
                                borderRadius: "10px",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                color: "#ffffff",
                                whiteSpace: "nowrap"
                            }}
                        >
                            <i className="bi bi-suit-heart-fill" style={{ color: "#fc3232" }}></i> Healthy Heart
                            <div
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    left: "-10px",
                                    width: 0,
                                    height: 0,
                                    borderTop: "6px solid transparent",
                                    borderBottom: "6px solid transparent",
                                    borderRight: "10px solid #474dbf"
                                }}
                            ></div>
                        </div>

                        <div
                            style={{
                                position: "absolute",
                                top: "84%",
                                left: "17%",
                                transform: "translate(-50%, -50%)",
                                backgroundColor: "#00cfe6",
                                padding: "6px 12px",
                                borderRadius: "10px",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                color: "#ffffff",
                                whiteSpace: "nowrap"
                            }}
                        >
                            <GiLeg className="text-warning" /> Healthy Leg
                            <div
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "-10px",
                                    width: 0,
                                    height: 0,
                                    borderTop: "6px solid transparent",
                                    borderBottom: "6px solid transparent",
                                    borderLeft: "10px solid #00cfe6"
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AnatomySection;