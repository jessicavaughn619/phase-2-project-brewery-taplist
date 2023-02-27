import React from "react";

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