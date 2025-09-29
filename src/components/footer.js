/*Website by Divya Rao
Github Link: https://github.com/divyarao54*/
import "../styles/footer.css";

const Footer = () => {
    const handleLinkClick = () => {
        window.location.href = "https://www.linkedin.com/in/divyarao54/";
    }
    return(
        <div className="footer-bg">
            <div className="footer-top">
                <div className="footer-section-1">
                    <div className="footer-name">IELTS Institute</div>
                </div>

                <div className="footer-section-2">
                    <div className="footer-location">
                        <div className="footer-address" onClick={handleLinkClick}>IELTS Institute, Mumbai, India</div>
                    </div>

                    <div className="footer-contact">
                        <div className="footer-number" onClick={handleLinkClick}>(555) 555-1234</div>
                    </div>

                    <div className="footer-email">
                        <div className="footer-email-address" onClick={handleLinkClick}>help@ieltsinstitute.com</div>
                    </div>
                </div>

                <div className="footer-section-3">
                    <div className="links">Home Page</div>
                    <div className="links" onClick={handleLinkClick}>Admissions</div>
                    <div className="links" onClick={handleLinkClick}>About Us Page</div>
                </div>
            
                <div className="footer-section-4">
                    <div className="links" onClick={handleLinkClick}>Terms and Conditions</div>
                    <div className="links" onClick={handleLinkClick}>Privacy Policy</div>
                    <div className="links" onClick={handleLinkClick}>Contact Us</div>
                </div>
            </div>

            <div className="footer-line"/>
            <div className="footer-rights">@2025 IELTS Institute, All Rights Reserved</div>
        </div>
    );
}

export default Footer;