import React from "react";
import "./Header.css";
class Header extends React.Component {
    render() {
        return (
            <>
            <nav className="Header">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            </>
        );
    }
}
export default Header;