import "./assets/footer.css";

function Footer() {
  return (
    <footer className="footer-distributed">
    <div className="footer-left">
      <h3>Nyumbani<span>-Properties</span></h3>
      <p className="footer-links">
        <a href="#">Home</a>
        ·
        <a href="#">About</a>
        ·
        <a href="#">Faq</a>
        ·
        <a href="#">Contact</a>
      </p>

      <p className="footer-company-name">Nyumbani &copy; 2024</p>
    </div>
    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker"></i>
        <p><span>Thom Mboya Street</span> Nairobi, Kenya</p>
      </div>

      <div>
        <i className="fa fa-phone"></i>
        <p>+254712345670</p>
      </div>

      <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">gmail@gmail.com</a></p>
      </div>
    </div>

    <div className="footer-right">
      <p className="footer-company-about">
        <span>About the company</span>
        For real estate supports
      </p>

      <div className="footer-icons">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-snapchat"></i></a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
