import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import ScrollTop from "./utils/ScrollTop";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import CareerOverview from "./pages/CareerOverview";
import MainPortfolio from "./pages/MainPortfolio";
import DevelopmentMethodology from "./pages/DevelopmentMethodology";
import ThankYou from "./pages/ThankYou";
import Inquiry from "./pages/Inquiry";
import Privacypolicy from "./pages/Privacypolicy";
import Termcondition from "./pages/Termcondition";
import Cursor from "./components/cursorG/CursorG";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import FilterPortfolio from "./pages/FilterPortfolio";
import {
  caseStudyDB,
  hireDeveloper,
  industries,
  industriesAll,
  services,
  solutionDatialsDB,
  technologyD,
} from "./utils/Database";
import ServicesD from "./pages/ServicesD";
import IndustriesD from "./pages/IndustriesD";
import HireDeveloperD from "./pages/HireDeveloperD";
import SolutionD from "./pages/SolutionD";
import CaseStudyD from "./pages/CaseStudyD";
import TechnologyD from "./components/Technology/TechnologyD";
import SolutionDatailsD from "./pages/SolutionDatailsD";
import Services from "./components/Services/Services";
import FaqD from "./components/FaqD/FaqD";
import Technology from "./components/Technology/Technology";
import Hiredeveloper from "./components/Hiredeveloper/Hiredeveloper";
import HireDeveloperContact from "./pages/HireDeveloperContact";
import IndustriesA from "./components/Industries/IndustriesA";
import IndusDetails from "./components/Industries/IndusDetails";
import { useContext } from "react";
import { themeContext } from "./Context";
import IndusInquiry from "./components/IndusInquiry/IndusInquiry";
import SolutionInquiry from "./components/SolutionInquiry/SolutionInquiry";
import Button from "./components/button/Button";

const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <Cursor />
      <div
        className="App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us.htm" element={<Aboutus />} />
          <Route path="/contact.htm" element={<Contact />} />;
          <Route path="/certifications.htm" element={<Certifications />} />
          <Route path="/career.htm" element={<CareerOverview />} />
          <Route path="/events-celebrations.htm" />
          <Route path="/casestudy.htm" element={<CaseStudyD />} />
          <Route path="/portfolio-list.htm" element={<MainPortfolio />} />
          <Route path="/solution.htm" element={<SolutionD />} />
          <Route
            path="/devmethology.htm"
            element={<DevelopmentMethodology />}
          />
          <Route
            path="/hire-developer-contact.htm"
            element={<HireDeveloperContact />}
          />
          <Route path="/thankyou.htm" element={<ThankYou />} />
          <Route path="/inquiry.htm" element={<Inquiry />} />
          <Route path="/privacy-policy.htm" element={<Privacypolicy />} />
          <Route path="/termcondition.htm" element={<Termcondition />} />
          {caseStudyDB.map((item) => (
            <Route
              key={item.id}
              path={item.subLink}
              element={
                <CaseStudyDetails
                  subLink={item.subLink}
                  sLinK={item.sLinK}
                  timeline={item.timeline}
                  soft={item.soft}
                  category={item.category}
                  headig={item.title}
                  bigImg1={item.img}
                  samllImg1={item.img2}
                  samllImg2={item.img3}
                  bigImg2={item.img4}
                  Introduction={item.Introduction}
                  Challenge={item.Challenge}
                  Results={item.Results}
                  Solution={item.Solution}
                />
              }
            />
          ))}
          {solutionDatialsDB.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                <SolutionDatailsD
                  title={item.title}
                  descShort={item.decsShort}
                  img={item.img}
                  url={item.link}
                />
              }
            />
          ))}
          <Route path="/portfolio.htm" element={<FilterPortfolio />} />
          {services.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                <ServicesD
                  title={item.title}
                  des={item.des}
                  img={item.img}
                  faq1={item.faq1}
                  ans1={item.ans1}
                  faq2={item.faq2}
                  ans2={item.ans2}
                  metades={item.metades}
                  url={item.link}
                />
              }
            />
          ))}
          {industries.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                <IndustriesD
                  title={item.title}
                  des={item.des}
                  img={item.img}
                  faq1={item.faq1}
                  ans1={item.ans1}
                  faq2={item.faq2}
                  ans2={item.ans2}
                  metades={item.metades}
                  url={item.link}
                />
              }
            />
          ))}
          {hireDeveloper.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                <HireDeveloperD
                  title={item.title}
                  des={item.des}
                  img={item.img}
                  faq1={item.faq1}
                  ans1={item.ans1}
                  faq2={item.faq2}
                  ans2={item.ans2}
                  metades={item.metades}
                  url={item.link}
                />
              }
            />
          ))}
          {technologyD.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                <TechnologyD
                  title={item.title}
                  des={item.des}
                  img={item.img}
                  faq1={item.faq1}
                  ans1={item.ans1}
                  faq2={item.faq2}
                  ans2={item.ans2}
                />
              }
            />
          ))}
          <Route path="/services" element={<Services />} />
          <Route path="/faq.htm" element={<FaqD />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/hiredeveloper" element={<Hiredeveloper />} />
          <Route path="/industries" element={<IndustriesA />} />
          <Route path="/industries-inquiry.htm" element={<IndusInquiry />} />
          <Route path="/solution-inquiry.htm" element={<SolutionInquiry />} />
          <Route path="/button" element={<Button />} />
          {industriesAll.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                <IndusDetails
                  title={item.title}
                  des={item.des}
                  img={item.img}
                  faq1={item.faq1}
                  ans1={item.ans1}
                  faq2={item.faq2}
                  ans2={item.ans2}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default App;
