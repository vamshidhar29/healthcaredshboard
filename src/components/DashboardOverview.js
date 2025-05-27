import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";

const DashboardOverview = () => {
    return (
        <div className="row">
        <div className="col-12 py-2">
            <div className="d-flex flex-row justify-content-between">
                <h4>Dashboard</h4>
                <span style={{fontSize: "13px"}}>This Week <i className="bi bi-chevron-down"></i></span>
            </div>

            <div className="row">
                <div className="col-8">
                    <AnatomySection />
                </div>
                <div className="col-4">
                    <HealthStatusCards />
                </div>
            </div>
        </div>
        </div>
    )
};

export default DashboardOverview;