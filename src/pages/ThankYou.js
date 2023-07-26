import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../Navbar";
import MobileNav from "../components/MobileNav/MobileNav";

export default function ThankYou() {
  return (
    <>
      <NavBar />
      <MobileNav />

      <section className="thanks">
        <div className="thankyou-content">
          <div className="img-thankyou mb-3">
            {/* <img src="images/gmail.png" alt="" /> */}
            <img src="images/success-icon-10.png" alt="" />
          </div>
          <div className="icon-thanks">
            <h1 className="mb-3">Thank you for reaching out to us!</h1>
          </div>
          <h5 className="mb-3">Your message has been sent!</h5>
          <div className="message-thank mb-3">
            <p>
              We have received your enquiry form and appreciate your interest in
              our services. Our team is now reviewing your request and will get
              back to you as soon as possible. If you have any further questions
              or need immediate assistance, please don't hesitate to contact us.
              We look forward to speaking with you soon!
            </p>
          </div>
          <div className="btn-main1">
            <NavLink to="/" class="btn-main">
              Go To Home{" "}
              <i class="fa fa-arrow-right ms-2" aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
