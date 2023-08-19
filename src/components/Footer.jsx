import React from "react";
import logo from "./Images/HRmatter.png";
import { BiLogoPlayStore } from "react-icons/bi";

function Footer() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          backgroundColor: "#ccc",
          borderRadius: "120px 0px 0px 0px",
          padding: "2px",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "50px 50px 20px 50px",
            borderRadius: "45px 0px 0px 0px",
          }}
        >
          <div style={{ maxWidth: "350px", padding: "20px 10px 0px 20px" }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "200px", height: "50px" }}
            />
            <p
              style={{
                textAlign: "left",
                fontSize: "15px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Onborinding .Scheduling Payroll Leave mangement Request mangement
              .Workchat messaging .All in one place
            </p>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  backgroundColor: "black",
                  color: "#fff",
                  borderRadius: "7px",
                  margin: "5px 5px 5px 0px",
                  padding: "10px 15px",
                }}
              >
                <BiLogoPlayStore style={{ fontSize: "20px" }} />
                <div style={{ padding: 0 }}>
                  {/* <p sx={{ fontSize: '10px', padding: 0 }}>lorem</p> */}
                  <p sx={{ fontSize: "10px", padding: "20px" }}>GooglePlay</p>
                </div>
              </button>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  backgroundColor: "black",
                  color: "#fff",
                  margin: "5px",
                  borderRadius: "7px",
                  padding: "10px 17px",
                }}
              >
                <BiLogoPlayStore style={{ fontSize: "20px" }} />
                <div style={{ padding: 0 }}>
                  {/* <p>lorem</p> */}
                  <p sx={{ fontSize: "10px" }}>AppleStore</p>
                </div>
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "180px",
            }}
          >
            <div
              style={{
                padding: 40,
                maxWidth: 300,
                marginLeft: "60px",
                marginRight: "60px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontWeight: 600,
                  fontSize: "18px",
                  textAlign: "left",
                }}
              >
                Company
              </p>
              <p
                style={{
                  fontSize: "14px",
                  textAlign: "left",
                  marginTop: "15px",
                  color: "",
                }}
              >
                About Us
              </p>
              <p
                style={{
                  fontSize: "14px",
                  textAlign: "left",
                  marginTop: "12px",
                }}
              >
                Why HRmatters
              </p>
            </div>
            <div
              style={{
                padding: 40,
                maxWidth: 300,
                marginLeft: "60px",
                marginRight: "60px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontWeight: 600,
                  fontSize: "18px",
                  textAlign: "left",
                }}
              >
                Support
              </p>
              <p
                style={{
                  fontSize: "15px",
                  textAlign: "left",
                  marginTop: "15px",
                }}
              >
                FAQs
              </p>
              <p
                style={{
                  fontSize: "15px",
                  textAlign: "left",
                  marginTop: "10px",
                }}
              >
                secruity
              </p>
            </div>
            <div
              style={{
                paddingTop: 40,
                maxWidth: 300,
                marginLeft: "70px",
                marginRight: "70px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontWeight: 600,
                  fontSize: "17px",
                  textAlign: "left",
                }}
              >
                Legal
              </p>
              <p
                style={{
                  fontSize: "15px",
                  textAlign: "left",
                  marginTop: "15px",
                }}
              >
                Privacy Policy
              </p>
              <p
                style={{
                  fontSize: "15px",
                  textAlign: "left",
                  marginTop: "10px",
                }}
              >
                Terms of service
              </p>
            </div>
          </div>
        </div>
        <BiLogoPlayStore
          style={{
            position: "absolute",
            backgroundColor: "tomato",
            borderRadius: "50%",
            padding: "9px",
            right: "50px",
            bottom: "45px",
            fontSize: "40px",
            color: "#fff",
          }}
        />
        <hr
          style={{
            color: "#33475b",
            borderBottom: "1px solid #33475b",
            marginLeft: "50px",
            marginRight: "50px",
          }}
        ></hr>
        <p style={{ textAlign: "center", margin: "20px", fontSize: "20px" }}>
          © 2023 Envato Pty Ltd.{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
