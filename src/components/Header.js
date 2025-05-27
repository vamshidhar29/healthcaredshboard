import '../styles/Header.css';
import { FcBusinessman } from "react-icons/fc";

const Header = () => {
    return (
        <div className="row header-height">
            <div className="col-4 col-sm-3 col-md-2 pt-3 ps-4" style={{backgroundColor: "#f7f9fc"}}>
                <h4>
                    <span style={{color: "#00cfe6"}}>Health</span>
                    <span>care.</span>
                </h4>
            </div>

            <div className="col-6 col-sm-8 col-md-5 p-1 p-sm-2 p-md-3">
                <div className="d-flex flex-row border rounded p-1 p-md-2">
                    <i className="bi bi-search me-1 me-3"></i>
                    <input type="search" placeholder="Search" 
                        className="search flex-shrink-1 me-1 me-md-3 border-0" />
                    <i className="bi bi-bell-fill ms-auto"></i>
                </div>
            </div>

            <div className="col-2 col-sm-2 col-md-5 p-1 p-sm-2 p-md-3" style={{backgroundColor: "#f7f9fc"}}>
                <div className="d-flex flex-row justify-content-end gap-1 gap-md-2">
                    <span className='profile-box d-flex align-items-center justify-content-center rounded p-1'>
                        <FcBusinessman size={25} />
                    </span>

                    <span className='profile-box-add d-flex align-items-center justify-content-center rounded p-1'>
                        <i className="bi bi-plus-lg text-white"></i>
                    </span>                  
                </div>
            </div>
        </div>
    )
};

export default Header