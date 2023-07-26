import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../Navbar";
import MobileNav from "../components/MobileNav/MobileNav";
import replace from "../utils/replaceTitle";

export default function Privacypolicy() {
  replace({
    title: "Privacy & Policy",
    description:
      "This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.",
  });
  return (
    <>
      <NavBar />
      <MobileNav />

      <section className="privacyPolicy">
        <div className="container">
          <div class="row d-flex flex-wrap-reverse">
            <div class="col-lg-12">
              <div class="common-heading text-l">
                <h1 class="pb-2 fontsize-70 services_hed pt-4 pt-lg-0">
                  Privacy & Policy
                </h1>
                <p>
                  Nexgeno Technology Pvt Ltd ("us", "we", or "our") operates the
                  nexgeno.in website (the "Service").
                </p>
                <p>
                  This page informs you of our policies regarding the
                  collection, use, and disclosure of personal data when you use
                  our Service and the choices you have associated with that
                  data.
                </p>
                <p>
                  We use your data to provide and improve the Service. By using
                  the Service, you agree to the collection and use of
                  information in accordance with this policy. Unless otherwise
                  defined in this Privacy Policy, terms used in this Privacy
                  Policy have the same meanings as in our Terms and Conditions,
                  accessible from{" "}
                  <NavLink to="/" style={{ color: "blue" }}>
                    nexgeno.in
                  </NavLink>
                </p>
                <p className="privacy-heading">
                  Information Collection And Use
                </p>
                <p className="privacy-para">
                  We collect several different types of information for various
                  purposes to provide and improve our Service to you.
                </p>
                <p className="privacy-heading">
                  Types of Data Collected <br />{" "}
                  <span className="fs-6"> Personal Data </span>
                </p>
                <p className="privacy-para">
                  Usage Data We may also collect information on how the Service
                  is accessed and used ("Usage Data"). This Usage Data may
                  include information such as your computer's Internet Protocol
                  address (e.g. IP address), browser type, browser version, the
                  pages of our Service that you visit, the time and date of your
                  visit, the time spent on those pages, unique device
                  identifiers and other diagnostic data.
                </p>
                <div className="privacy-personal-data">
                  <ul>
                    <li>
                      {" "}
                      <span> Email Address: </span> info@nexgeno.in{" "}
                    </li>

                    <li>
                      {" "}
                      <span> Phone Number: </span> +91 90040 53525{" "}
                    </li>
                    <li>
                      {" "}
                      <span> Address: </span> Unit No. F-50, First Floor
                      kohinoor City Mall Opp Holly Cross School, Kurla (West)
                      Mumbai, Maharashtra - 400070.{" "}
                    </li>
                    <li>
                      {" "}
                      <span> State : </span> Maharashtra{" "}
                    </li>
                    <li>
                      {" "}
                      <span> ZIP/Postal code: </span> 400070{" "}
                    </li>
                    <li>
                      {" "}
                      <span> City : </span> Mumbai
                    </li>
                  </ul>
                </div>
                <p className="privacy-heading">Usage Data</p>
                <p className="privacy-para">
                  We may also collect information on how the Service is accessed
                  and used ("Usage Data"). This Usage Data may include
                  information such as your computer's Internet Protocol address
                  (e.g. IP address), browser type, browser version, the pages of
                  our Service that you visit, the time and date of your visit,
                  the time spent on those pages, unique device identifiers and
                  other diagnostic data.
                </p>

                <p className="privacy-heading">Tracking & Cookies Data</p>
                <p className="privacy-para">
                  We use cookies and similar tracking technologies to track the
                  activity on our Service and hold certain information.
                </p>
                <p className="privacy-para">
                  Cookies are files with a small amount of data which may
                  include an anonymous unique identifier. Cookies are sent to
                  your browser from a website and stored on your device.
                  Tracking technologies also used are beacons, tags, and scripts
                  to collect and track information and to improve and analyze
                  our Service.
                </p>
                <p className="privacy-para">
                  You can instruct your browser to refuse all cookies or to
                  indicate when a cookie is being sent. However, if you do not
                  accept cookies, you may not be able to use some portions of
                  our Service.
                </p>
                <p className="privacy-heading">Examples of Cookies we use:</p>

                <div className="privacy-usage-data">
                  <ul>
                    <li>
                      Session Cookies. We use Session Cookies to operate our
                      Service
                    </li>
                    <li>
                      Preference Cookies. We use Preference Cookies to remember
                      your preferences and various settings.
                    </li>
                    <li>
                      Security Cookies. We use Security Cookies for security
                      purposes
                    </li>
                  </ul>
                </div>

                <p className="privacy-heading">Use of Data</p>
                <p className="privacy-para">
                  Nexgeno Technology Pvt Ltd uses the collected data for various
                  purposes:
                </p>
                <div className="privacy-usage-data">
                  <ul>
                    <li>To provide and maintain the Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>
                      To allow you to participate in interactive features of our
                      Service when you choose to do so
                    </li>
                    <li>To provide customer care and support</li>
                    <li>
                      To provide analysis or valuable information so that we can
                      improve the Service
                    </li>
                    <li>To monitor the usage of the Service</li>
                    <li>To detect, prevent and address technical issues</li>
                  </ul>
                </div>
                <p className="privacy-heading">Transfer Of Data</p>
                <p className="privacy-para">
                  Your information, including Personal Data, may be transferred
                  to — and maintained on — computers located outside of your
                  state, province, country or other governmental jurisdiction
                  where the data protection laws may differ from those from your
                  jurisdiction.
                </p>
                <p className="privacy-para">
                  If you are located outside India and choose to provide
                  information to us, please note that we transfer the data,
                  including Personal Data, to India and process it there.
                </p>
                <p className="privacy-para">
                  Your consent to this Privacy Policy followed by your
                  submission of such information represents your agreement to
                  that transfer.
                </p>
                <p className="privacy-para">
                  Nexgeno Technology Pvt Ltd will take all steps reasonably
                  necessary to ensure that your data is treated securely and in
                  accordance with this Privacy Policy and no transfer of your
                  Personal Data will take place to an organization or a country
                  unless there are adequate controls in place including the
                  security of your data and other personal information.
                </p>
                <p className="privacy-para">
                  Disclosure Of Data <br /> Legal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
