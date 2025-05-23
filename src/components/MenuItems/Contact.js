import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="Contact-title">
        <hr className="Contact-title-line" />
        <h1 className="Contact-title-h1">CONTACT</h1>
      </div>
      <div className="Contact-content">
        <h1 className="Contact-content-h1">Get in touch.</h1>
        <div className="Contact-content-top">
          <div className="social">
            <a href="https://www.facebook.com/nopphadon.rakkanying">
              <img
                src="facebook.svg"
                className="Contact-content-icon"
                width="75px"
                alt="fb-icon"
              />
            </a>
            <a href="https://www.instagram.com/uop_don/">
              <img
                src="instagram.svg"
                className="Contact-content-icon"
                width="75px"
                alt="ig-icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/%E0%B8%99%E0%B8%9E%E0%B8%94%E0%B8%A5-%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%A2%E0%B8%B4%E0%B9%88%E0%B8%87-a887b7354 ">
              <img
                src="linkedin.svg"
                className="Contact-content-icon"
                width="75px"
                alt="li-icon"
              />
            </a>
            <a href="https://github.com/NopphadonRK">
              <img
                src="github.svg"
                className="Contact-content-icon"
                width="75px"
                alt="gh-icon"
              />
            </a>
          </div>
          <div className="Contact-content-phone">
            <img
              src="telephone.svg"
              className="Contact-content-icon"
              width="20px"
              alt="phone-icon"
            />
            <label className="Contact-content-label">Phone</label>
            <p className="Contact-content-p">085-543-3020</p>
          </div>
          <div className="Contact-content-email">
            <img
              src="envelope.svg"
              className="Contact-content-icon"
              width="20px"
              alt="email-icon"
            />
            <label className="Contact-content-label">Email</label>
            <p className="Contact-content-p">nopphadon.rakkanying@gmail.com</p>
          </div>
          <div className="Contact-content-address">
            <img
              src="geo-alt.svg"
              className="Contact-content-icon"
              width="20px"
              alt="address-icon"
            />
            <label className="Contact-content-label">Address</label>
            <div>
              <p className="Contact-content-p">
                30 Village No. 9, Mae Phrik Subdistrict, Mae Suai District,
                Chiang Rai Province 57180
              </p>
            </div>
          </div>
        </div>
        <div className="Contact-content-bottom"></div>
      </div>
    </div>
  );
}

export default Contact;
