import React from "react";
import "./Footer.css";

function Footer() {
    const today = new Date().getFullYear();

    return (
        <footer className="footer">
            Made with ❤️ & 🍺
            <br />
            © Jessica Vaughn {today}
        </footer>
    )
}

export default Footer;