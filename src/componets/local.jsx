import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <div className="md:h-[480px] h-[700px] w-full bg-[#07282C]">
      <div className="flex flex-col md:gap-4 pt-10 justify-center items-center md:flex-row w-[100%]">
        <div className="md:gap-8 h-auto     flex flex-row justify-center items-center md:w-[45%] w-full">
          <div className="flex flex-col h-[250px]  w-full ">
            <div>
              <h3
                style={{
                  color: "#71D6CE",
                  marginBottom: 6,
                  fontSize: "1.35em",
                }}
              >
                Navigation
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 10,
                      fontSize: "1.08em",
                    }}
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col h-[250px] w-full ">
            <div>
              <h3
                style={{
                  color: "#7ecbff",
                  marginBottom: 16,
                  fontSize: "1.35em",
                }}
              >
                Support
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 10,
                      fontSize: "1.08em",
                    }}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 10,
                      fontSize: "1.08em",
                    }}
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 10,
                      fontSize: "1.08em",
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 10,
                      fontSize: "1.08em",
                    }}
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-auto md:gap-8 bg-red-40 flex flex-row justify-center items-center md:w-[45%] w-full">
          <div className="flex-col  h-[250px] w-full ">
            <div>
              <h3
                style={{
                  color: "#7ecbff",
                  marginBottom: 16,
                  fontSize: "1.35em",
                }}
              >
                Social Media
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 10,
                      fontSize: "1.08em",
                    }}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 10,
                      fontSize: "1.08em",
                    }}
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 10,
                      fontSize: "1.08em",
                    }}
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: 10,
                      fontSize: "1.08em",
                    }}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col h-[250px] w-full ">
            <div>
              <h3
                style={{
                  color: "#7ecbff",
                  marginBottom: 16,
                  fontSize: "1.35em",
                }}
              >
                Contact Info
              </h3>
              <address
                style={{
                  fontStyle: "normal",
                  color: "#fff",
                  lineHeight: 1.7,
                  fontSize: "1.08em",
                }}
              >
                Jl. Danau Tamblingan No.180, Sanur, Denpasar, Bali 80222
                <br />
                <a
                  href="mailto:support@domain.com"
                  style={{
                    color: "#7ecbff",
                    textDecoration: "none",
                    fontSize: "1.08em",
                  }}
                >
                  support@domain.com
                </a>
                <br />
                <a
                  href="tel:+62887110622814"
                  style={{
                    color: "#7ecbff",
                    textDecoration: "none",
                    fontSize: "1.08em",
                  }}
                >
                  (+62) 887-1106-22814
                </a>
              </address>
              <div style={{ display: "flex", gap: "18px", marginTop: "22px" }}>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
                    alt="WhatsApp"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      padding: 5,
                      background: "#25D366",
                    }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                    alt="LinkedIn"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      padding: 5,
                      background: "#0077B5",
                    }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                    alt="Instagram"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      padding: 5,
                      background:
                        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                    }}
                  />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg"
                    alt="Twitter"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      padding: 5,
                      background: "#1DA1F2",
                    }}
                  />
                </a>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                    alt="Facebook"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      padding: 5,
                      background: "#1877F3",
                    }}
                  />
                </a>
                <a
                  href="https://pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Pinterest"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pinterest.svg"
                    alt="Pinterest"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      padding: 5,
                      background: "#E60023",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            textAlign: "center",
            marginTop: 32,
            color: "#aaa",
            fontSize: 18,
            position: "relative",
            minHeight: 60,
          }}
        >
          &copy; 2025 Cloud Solutions. All rights reserved.
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: -32,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
              paddingRight: 24,
            }}
          >
            <a
              href="#"
              style={{
                color: "#7ecbff",
                textDecoration: "underline",
                fontSize: 16,
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                color: "#7ecbff",
                textDecoration: "underline",
                fontSize: 16,
              }}
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
