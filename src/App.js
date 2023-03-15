import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './component/Navbar';
import NavbarComponent from "./component/Navbar";
import Footer from "./component/Footer";
import body from "./component/body.js";
import Figure from "react-bootstrap/Figure";
import Image from "./Image";
import Single from './Single_man.jpg';

function App() {
  return (
    <div className="App">
      <NavbarComponent />

      <div>
        <h1>Here</h1>
      </div>
      <div>
        <section
          className="bg-info">
          <div className="container">
            <div
              className="row text-light"
              style={{ paddingTop: 200, paddingBottom: 180 }}
            >
              <div className="col">
                <h1 className="display-2">Sports Scheduling Software</h1>
                <h3>
                  for gyms, personal trainers, yoga studios <br />
                  and sports more ...
                </h3>
                <button
                  type="submit"
                  className="btn btn-lg btn-light px-5"
                  disabled=""
                >
                  Get a Free Account
                </button>
                <button
                  type="submit"
                  className="btn btn-secondary btn-lg"
                  disabled=""
                >
                  be excited
                </button>
                <br />
                <br />
                <p>No Credit card needed</p>
              </div>
            </div>
          </div>
        </section>

        <section id="welcome">
          <div className="container">
            <div className="welcome text-center">
              <h1>Cardio. Strength. Mobility.</h1>
              <h5>
                <p>
                  This is what we do best. Every workout that you experience
                  with Fit2Planet made from scratch under our fitness
                  supervision.
                </p>
              </h5>
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </div>
          </div>
        </section>

        <div>
          <Image />
        </div>

        <section className="figures">
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={Single}
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </section>

        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={Single} height={300} width={450}  />
              </div>
              <div className="col-md-6">
                <h3>Knowledge, Skill &amp; Hard work</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita autem aspernatur in ipsam, nisi quam fugiat,
                  reprehenderit, ab amet nobis quia temporibus magni rerum
                  itaque voluptates! Laborum maiores eveniet laboriosam.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h3>Knowledge, Skill &amp; Hard work</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita autem aspernatur in ipsam, nisi quam fugiat,
                  reprehenderit, ab amet nobis quia temporibus magni rerum
                  itaque voluptates! Laborum maiores eveniet laboriosam.
                </p>
              </div>
              <div className="col-md-6">
              <img src={Single} height={300} width={450}  />
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <div className="container">
            <div className="row">
              <h3 className="text-center">Meet our users</h3>
              <p className="text-center">
                Few feedbacks of our fewest out of many happy customers.
              </p>
              <div className="col-md-4">
                <p className="review">
                  Good site to know everything about fitness <br />
                  <i className="bi bi-twitter" />
                  <span>@username</span>
                </p>
                <img src="./user.jpg" />
              </div>
              <div className="col-md-4">
                <p className="review">
                  Good site to know everything about fitness <br />
                  <i className="bi bi-twitter" />
                  <span>@username</span>
                </p>
                <img src="/user.jpg" alt="user" />
                {/* <img src="./user.jpg" /> */}
              </div>
              <div className="col-md-4">
                <p className="review">
                  Good site to know everything about fitness <br />
                  <i className="bi bi-twitter" />
                  <span>@username</span>
                </p>
                <img src="./user.jpg" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <body />
      <Footer />
    </div>
  );
}

export default App;
