
const Sidebar = () => {
    return (
        <div className="row">
            <div className="col-12" style={{ height: '100%', backgroundColor: '#f7f9fc' }}>
                <div className="p-1 p-md-3 pt-1 pt-sm-2 pt-lg-3 ps-1 ps-sm-2 ps-lg-4 d-flex flex-column" style={{ height: '88vh' }}>

                    <div className="d-flex flex-column">
                        <h6>General</h6>
                        <div className="d-flex flex-row">
                            <i className="bi bi-ui-checks-grid me-1 me-sm-2 me-lg-3"></i>
                            <p>Dashboard</p>
                        </div>
                        <div className="d-flex flex-row">
                            <i className="bi bi-arrow-down-up me-1 me-sm-2 me-lg-3"></i>
                            <p>History</p>
                        </div>
                        <div className="d-flex flex-row">
                            <i className="bi bi-calendar-week-fill me-1 me-sm-2 me-lg-3"></i>
                            <p>Calender</p>
                        </div>
                        <div className="d-flex flex-row">
                            <i className="bi bi-plus-square-fill me-1 me-sm-2 me-lg-3"></i>
                            <p>Appointments</p>
                        </div>
                        <div className="d-flex flex-row">
                            <i className="bi bi-graph-up-arrow me-1 me-sm-2 me-lg-3"></i>
                            <p>Statistics</p>
                        </div>
                    </div>

                    <div className="d-flex flex-column pt-2">
                        <h6>Tools</h6>
                        <div className="d-flex flex-row">
                            <i className="bi bi-chat-dots-fill me-1 me-sm-2 me-lg-3"></i>
                            <p>Chat</p>
                        </div>
                        <div className="d-flex flex-row">
                            <i className="bi bi-telephone-fill me-1 me-sm-2 me-lg-3"></i>
                            <p>Support</p>
                        </div>
                    </div>

                    <div className="d-flex flex-row mt-auto">
                        <i className="bi bi-gear me-1 me-sm-2 me-lg-3"></i>
                        <p>Settings</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;