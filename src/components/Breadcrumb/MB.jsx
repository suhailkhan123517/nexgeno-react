import * as React from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from "@mui/material/";
import "./MB.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div
        style={{
          background: darkMode ? "black" : "#fffbfd",
          color: darkMode ? "white" : "",
        }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-12 ">
              <div role="presentation">
                <MUIBreadcrumbs
                  className="breadcrumb justify-content-center"
                  aria-label="breadcrumb"
                >
                  {pathnames.length > 0 ? (
                    <Link
                      style={{ fontSize: "18px", fontWeight: "500" }}
                      underline="hover"
                      onClick={() => navigate("/")}
                    >
                      Home
                    </Link>
                  ) : (
                    ""
                  )}

                  {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames
                      .slice(0, index + 1)
                      .join("/")}`;
                    const rname = name.replace(/\..*/g, "$'");
                    const newName = rname.replace(/-/g, " ");
                    const fName =
                      newName.charAt(0).toUpperCase() + newName.slice(1);
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                      <Typography
                        style={{
                          fontSize: "18px",
                          fontWeight: "500",
                          color: darkMode ? "white" : "",
                        }}
                      >
                        {fName}
                      </Typography>
                    ) : (
                      <Link
                        style={{ fontSize: "18px", fontWeight: "500" }}
                        underline="hover"
                        onClick={() => navigate(routeTo)}
                      >
                        {fName}
                      </Link>
                    );
                  })}
                </MUIBreadcrumbs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
