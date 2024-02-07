"use client";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {}, []);

  function alphaOnly(event) {
    var key = event.keyCode;
    return (key >= 65 && key <= 90) || key == 8 || key == 32;
  }

  return (
    <div>
      <Head>
        <title>Services</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      </Head>

      <main>
        <section id="intro" className="intro">
          <div className="intro-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="wow fadeInDown">
                    <h3
                      style={{
                        color: "white",
                      }}
                    >
                      CONTACT US
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="boxes" className="home-section paddingtop-70">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-4">
                <div className="box-container">
                  <div className="wow fadeInUp white-bg" data-wow-delay="0.3s">
                    <div className="box text-center">
                      <i
                        className="fa fa-check fa-3x blur-icon bg-skin"
                        style={{
                          color: "blue",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      ></i>
                      <h4 style={{ textAlign: "center" }}>
                        Make an appointment
                      </h4>
                      <p style={{ textAlign: "center" }}>
                        Lorem ipsum dolor sit amet, nec te mollis utroque
                        honestatis, ut utamur molestiae vix, graecis eligendi
                        ne.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="box-container">
                  <div className="wow fadeInUp white-bg" data-wow-delay="0.5s">
                    <div className="box text-center">
                      <i
                        className="fa fa-list-alt fa-3x blur-icon bg-skin"
                        style={{
                          color: "blue",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      ></i>
                      <h4 style={{ textAlign: "center" }}>
                        Choose your package
                      </h4>
                      <p style={{ textAlign: "center" }}>
                        Lorem ipsum dolor sit amet, nec te mollis utroque
                        honestatis, ut utamur molestiae vix, graecis eligendi
                        ne.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="box-container">
                  <div className="wow fadeInUp white-bg" data-wow-delay="0.7s">
                    <div className="box text-center">
                      <i
                        className="fa fa-user-md fa-3x blur-icon bg-skin"
                        style={{
                          color: "blue",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      ></i>
                      <h4 style={{ textAlign: "center" }}>
                        Help by specialist
                      </h4>
                      <p style={{ textAlign: "center" }}>
                        Lorem ipsum dolor sit amet, nec te mollis utroque
                        honestatis, ut utamur molestiae vix, graecis eligendi
                        ne.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="contact-form">
          <div className="contact-image">
            <img
              src="https://image.ibb.co/kUagtU/rocket_contact.png"
              alt="rocket_contact"
            />
          </div>
          <form style={{ paddingBottom: "90px" }} method="post" action="#">
            <h3>Drop Us a Message</h3>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="txtName"
                    className="form-control"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="txtEmail"
                    className="form-control"
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="txtPhone"
                    className="form-control"
                    placeholder="Enter Phone"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <p></p>
                  <textarea
                    name="txtMsg"
                    className="form-control"
                    placeholder="Enter Message"
                    style={{ width: "110%", height: "90px" }}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-groups">
                  <input
                    type="submit"
                    name="btnSubmit"
                    className="btnContact"
                    value="Send Message"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div
          className="contact-form"
          style={{
            height: "150px",
            width: "1190px",
            margin: "0 auto",
            marginLeft: "40px",
            marginRight: "0px",
            marginTop: "5px",
            marginBottom: "0px",
            paddingTop: "1px",
            paddingBottom: "2px",
            backgroundColor: "transparent",
            color: "white",
          }}
        >
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              className="col-md-6"
              style={{
                height: "150px",
                width: "48%",
                padding: "10px",
                marginRight: "2%",
              }}
            >
              <div className="form-group">
                <div className="wow fadeInDown" data-wow-delay="0.1s">
                  <div className="widget">
                    <ul>
                      <li>
                        <span className="fa-stack fa-lg">
                          <i
                            className="fa fa-calendar-o fa-stack-1x fa-inverse"
                            style={{ color: "white" }}
                          ></i>
                        </span>{" "}
                        Monday - Saturday, 8am to 10pm
                      </li>
                      <li>
                        <span className="fa-stack fa-lg">
                          <i
                            className="fa fa-phone fa-stack-1x fa-inverse"
                            style={{ color: "white" }}
                          ></i>
                        </span>{" "}
                        +62 0888 904 711
                      </li>
                      <li>
                        <span className="fa-stack fa-lg">
                          <i
                            className="fa fa-envelope-o fa-stack-1x fa-inverse"
                            style={{ color: "white" }}
                          ></i>
                        </span>{" "}
                        caretakers@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{
                height: "150px",
                width: "48%",
                padding: "10px",
                marginLeft: "0%",
              }}
            >
              <div className="form-group">
                <div className="widget">
                  <p></p>
                  <p> </p>
                  <p>
                    <b>ADDRESS</b>
                  </p>
                  <p>#246,Basavangudi 8th Phase,Bangalore,Karnataka-560085.</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{
                height: "150px",
                width: "48%",
                padding: "10px",
                marginLeft: "0%",
              }}
            >
              <div className="form-group">
                <div className="widget">
                  <p></p>
                  <p>Follow us</p>
                  <ul className="company-social">
                    <li className="social-facebook">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="social-twitter">
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-google">
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li className="social-vimeo">
                      <a href="#">
                        <i className="fa fa-vimeo-square"></i>
                      </a>
                    </li>
                    <li className="social-dribble">
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
