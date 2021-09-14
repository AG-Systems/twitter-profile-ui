import React from 'react'
import Head from 'next/head'

function BottomMobileNavbar() {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-white border-top d-lg-none shadow-sm rounded" style={{ padding: "2px" }}>
        <div style={{ width: "100%", height: "10px" }}></div>
        <div className="container-fluid" style={{ marginBottom: "20px" }}>
            <div className="row mx-auto">
                    <div className="col">
                        <a href="">
                            <i className="fas fa-home" style={{ fontSize: '27px', color: '#21ce99' }}>
                            </i>
                         </a>
                    </div>

                    <div className="col">
                        <a href="">
                            <i className="fas fa-chart-bar" style={{ fontSize: '27px', color: '#21ce99' }}>
                            </i>
                         </a>
                    </div>

                    <div className="col">
                        <a href="">
                            <i className="fas fa-user-circle" style={{ fontSize: '27px', color: '#21ce99' }}>
                            </i>
                         </a>
                    </div>
                    <div className="col">
                        <a href="">
                            <i className="fas fa-bars" style={{ fontSize: '27px', color: '#21ce99' }}>
                            </i>
                         </a>
                    </div>
            </div>
            <div style={{ width: "100%", height: "10px" }}></div>
        </div>
    </nav>
  )
}

export default BottomMobileNavbar
