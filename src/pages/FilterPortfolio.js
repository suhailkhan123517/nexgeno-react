import React, { useEffect, useState } from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import { useUrlFilter } from "react-filter-by-url";
import { useNavigate } from "react-router-dom";
import {
  filterIndustries,
  filterServices,
  filterTechnology,
} from "../utils/Database";
import MobileNav from "../components/MobileNav/MobileNav";

export default function FilterPortfolio() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
    console.log("suhail");
  };

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // api url
  const apiUrl = "https://api.nexgeno.in/api/portfolio";

  // list of params to filter
  const params = ["page", "service", "industry", "stack", "adv_search"];

  // page will be 1 every time status has changed
  const refreshParams = ["page"];

  const { apiQuery, getDefaultParamValue, handleSelectFilter } = useUrlFilter(
    params,
    apiUrl,
    refreshParams
  );

  const [data, setData] = useState({ status: String, status: "loading" });
  var pagesArray = [];

  const fetchApi = async () => {
    setData({
      status: "loading",
      data: [],
    });
    try {
      const response = await fetch(apiQuery);
      const data = await response.json();
      console.log(data.results);
      localStorage.setItem("pages", data.info.pages);
      setData({
        status: "success",
        data: data?.results || [],
      });
    } catch (error) {
      console.error(error);
    }
  };
  let pagination = localStorage.getItem("pages");

  for (var i = 1; i <= pagination; i++) {
    pagesArray.push(i);
  }

  useEffect(() => {
    fetchApi();
  }, [apiQuery]);

  return (
    <>
      <NavBar />
      <MobileNav />

      <div className="container-fluid ani-port">
        <div className="row filter-portfolio">
          <div
            className={`col-md-12    ${
              open ? "category-f open" : "category-f"
            }`}
          >
            <div className="row mobile-heading">
              <div className="col-12">
                <h2 className="text-center text-white mt-4">
                  Nexgeno Portfolio
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="dropdown mt-4">
                  <h6>Services :</h6>
                  <select
                    name="service"
                    onChange={(e) =>
                      handleSelectFilter(e.target.name, e.target.value)
                    }
                    defaultValue={getDefaultParamValue("service", "")}
                  >
                    <option value="">All</option>
                    <option value="">Website Design</option>
                    {filterServices.map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dropdown mt-4">
                  <h6>Industries</h6>
                  <select
                    name="industry"
                    className="select"
                    onChange={(e) =>
                      handleSelectFilter(e.target.name, e.target.value)
                    }
                    defaultValue={getDefaultParamValue("industry", "")}
                  >
                    <option value="">All</option>
                    {filterIndustries.map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dropdown mt-4">
                  <h6>Technology :</h6>
                  <select
                    name="stack"
                    onChange={(e) =>
                      handleSelectFilter(e.target.name, e.target.value)
                    }
                    defaultValue={getDefaultParamValue("stack", "")}
                  >
                    <option value="">All</option>
                    {filterTechnology.map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                  </select>
                  <div className="dropdown-btn">
                    <div className="filter-btn">
                      <button onClick={toggle} className="fil-btn-h">
                        Apply Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="back-port-btn">
                  <div onClick={toggle} className="btn-p-b">
                    <i class="fa-solid fa-arrow-left"></i> <span>Back</span>
                  </div>
                </div>
                <div className="Search">
                  <input
                    name="adv_search"
                    onInput={(e) =>
                      handleSelectFilter(e.target.name, e.target.value)
                    }
                    className="search-input"
                    value={getDefaultParamValue("adv_search", "")}
                    placeholder="Search here..."
                  ></input>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 product-f">
            <div className="fillter-btn-show justify-content-center">
              <button onClick={toggle} className="fil-b-s">
                Filter
                <span>
                  <i class="fa-solid fa-filter"></i>
                </span>{" "}
              </button>
            </div>
            <div className="row">
              {data?.status === "loading" && (
                <div className="spinner">
                  <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
              {data?.status === "success" && (
                <>
                  {data.data
                    .filter((item) => {
                      return search.toLocaleLowerCase() === ""
                        ? item
                        : item.name.toLocaleLowerCase().includes(search);
                    })
                    .map((i) => {
                      return (
                        <div key={i?.id} className="col-md-4 mb-md-5 ">
                          <div className="pe-5 ps-2 pb-4 pb-lg-0">
                            <a
                              className="hover-animation"
                              target="_blank"
                              href={i?.url}
                            >
                              <div>
                                <img
                                  className="img-fluid"
                                  src={i?.img_desktop}
                                  alt=""
                                />
                                <img
                                  className="hoverImages img-fluid"
                                  src={i?.img_responsive}
                                  alt=""
                                />
                              </div>
                              <div className="item-title-filter">
                                <h5 className="hover-underline-animation">
                                  {i?.name}
                                </h5>
                                <p className="text-white">{i?.description}</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                </>
              )}
            </div>

            <div className="row">
              <div className="col-12">
                {/* <div className="pages">
                  {pagesArray.map((pageNum) => {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handleSelectFilter("page", pageNum)}
                        className={
                          pageNum === getDefaultParamValue("page", pagesArray)
                            ? "button-filter"
                            : "button-filter-on"
                        }
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
