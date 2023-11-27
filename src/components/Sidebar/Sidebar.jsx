import React from "react"
import './Sidebar.css'

export default function Sidebar() {
    return (
        <div>
            <div className="sidebar h-full py-5 d-flex flex-column justify-content-between">
                <div className="row mb-5 branding-container">
                    <h5 className="text-center brand-name">Medico Sales</h5>
                </div>
                <div className="row nav-links">
                    <ul>
                        <li className="nav-link active">
                            <i className='bx bxs-grid-alt me-3'></i>
                            <p>Dashboard</p>
                        </li>
                        <li className="nav-link">
                            <i className='bx bx-test-tube me-3'></i>
                            <p>Labtest</p>
                        </li>
                        <li className="nav-link">
                            <i className='bx bxs-calendar-plus me-3'></i>
                            <p>Appointment</p>
                        </li>
                        <li className="nav-link">
                            <i className='bx bxs-shopping-bags me-3'></i>
                            <p>Medicine Order</p>
                        </li>
                        <li className="nav-link">
                            <i className='bx bxs-comment-detail me-3'></i>
                            <p>Message</p>
                        </li>
                        <li className="nav-link">
                            <i className='bx bx-wallet me-3'></i>
                            <p>Payment</p>
                        </li>
                        <li className="nav-link">
                            <i className='bx bx-cog me-3' ></i>
                            <p>Settings</p>
                        </li>
                        <div className="d-flex align-items-center justify-content-start footer">
                        <i className='bx bx-help-circle me-3'></i>
                        <p>Help</p>
                        </div>
                    </ul>
                </div>
                {/* <div className=" row footer">
                    <div className="d-flex align-items-center justify-content-start">
                    </div>
                </div> */}
            </div>
        </div>
    )
}