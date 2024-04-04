import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="d-flex bg-info fw-bolder justify-content-beteween">
                <div className="logo">LOGO</div>
                <ul className="d-flex gap-4 list-unstyled">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/projects">Project</Link>
                    <Link to="/services">Services</Link>
                </ul>
            </div>
        </>
    )
}

export default Header