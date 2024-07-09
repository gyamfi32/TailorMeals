import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
import image from "../Assets/pexels-mastercowley-1153370.jpg";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
  MDBTextArea,
} from "mdb-react-ui-kit";

const Home = () => {
  const [featuredRecipe, setFeaturedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchFeaturedRecipe();
  }, []);

  const fetchFeaturedRecipe = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random`,
        {
          params: {
            number: 1,
            apiKey: "86468b2df7e34289a04d940745305de0", // Replace with your Spoonacular API key
          },
        }
      );
      setFeaturedRecipe(response.data.recipes[0]);
    } catch (error) {
      setError(
        "An error occurred while fetching the featured recipe. Please try again."
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1> Welcome to Tailor Meals</h1>
          <p className="hero">
            Delicious, Customized Meals to cater for your health needs.
          </p>
          <button className="cta-button">
            <a href="LoginRegister" className="cta-button-text">
              Get Started
            </a>
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-around g-2 m-2 mt-5">
        <div id="about" className="g-col-6 w-50 about-section text-center p-5">
          <h2 className="display-2">About Us</h2>
          <p className="fs-4">
            Tailor Meals provides customized meal plans to meet your unique
            health needs. Our mission is to make healthy eating easy and
            enjoyable for everyone.
          </p>
        </div>
        <div id="about" className="g-col-6 w-50 about-section p-2">
          <img src={image} alt="A lady in a kitchen" className="image" />
        </div>
      </div>
      {/* <div className="d-flex grid justfy-content-around g-2 m-2 services-section"> */}
      <div className="services-section p-4 mt-5">
        <h2>Our Services</h2>
        <section
          id="services"
          className="d-flex justify-content-around g-2 m-2"
        >
          <div className="service ">
            <h3>Meal Customization</h3>
            <p className="tailor">
              Get meals tailored to your dietary preferences and health goals.
            </p>
          </div>
          <div className="service">
            <h3>Dietary Nutritional Info</h3>
            <p>Get nutritiom information on meals to inform you...</p>
          </div>
        </section>
      </div>
      <div className="recipes-section p-4 mt-5">
        <h2>Featured Recipe</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        {featuredRecipe && (
          <div className="featured-main d-flex justify-content-evenly mt-5">
            <div className="featured-recipe">
              <img
                className="rounded"
                src={featuredRecipe.image}
                alt={featuredRecipe.title}
              />
            </div>

            <div className="featured-recipe-info ">
              <h3>{featuredRecipe.title}</h3>
              <p className="recipe-info m-4">
                {featuredRecipe.summary.replace(/(<([^>]+)>)/gi, "")}
              </p>
              <a
                href={featuredRecipe.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Recipe
              </a>
            </div>
          </div>
        )}
      </div>
      {/* <section id="testimonials" className="testimonials-section mt-5">
          <h2>Testimonials</h2>
          <div className="testimonial">
            <p>
              "Tailor Meals has transformed my eating habits for the better!" -
              Customer 1
            </p>
          </div>
          <div className="testimonial">
            <p>
              "The meals are delicious and perfectly suited to my diet." -
              Customer 2
            </p>
          </div>
        </section> */}
      <div className="testimonial-section m-2 p-2">
        <h2 className="text-center">Testimonials</h2>

        <MDBContainer className="my-5">
          <MDBCarousel showControls dark>
            <MDBCarouselItem className="active text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                alt="avatar"
                className="rounded-circle shadow-1-strong mb-4"
                style={{ width: "150px" }}
              />
              <MDBRow className="d-flex justify-content-center">
                <MDBCol lg="8">
                  <h5 className="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                  <p className="text-muted">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    "Tailor Meals has been a game changer for me! The meals are
                    delicious, healthy, and perfectly tailored to my dietary
                    needs. I feel more energetic and healthier since I started
                    using their service."
                  </p>
                </MDBCol>
              </MDBRow>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  {" "}
                  <MDBIcon fas icon="star" size="sm" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" />
                </li>
                <li>
                  <MDBIcon far icon="star" size="sm" />
                </li>
              </ul>
            </MDBCarouselItem>

            <MDBCarouselItem className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                alt="avatar"
                className="rounded-circle shadow-1-strong mb-4"
                style={{ width: "150px" }}
              />
              <MDBRow className="d-flex justify-content-center">
                <MDBCol lg="8">
                  <h5 className="mb-3">John Doe</h5>
                  <p>Web Developer</p>
                  <p className="text-muted">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    "As a busy professional, finding the time to cook healthy
                    meals was always a challenge. Tailor Meals made it so much
                    easier. The meal plans are convenient and the food tastes
                    amazing!"
                  </p>
                </MDBCol>
              </MDBRow>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <MDBIcon fas icon="star" size="sm" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" />
                </li>
                <li>
                  <MDBIcon far icon="star" size="sm" />
                </li>
              </ul>
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                alt="avatar"
                className="rounded-circle shadow-1-strong mb-4"
                style={{ width: "150px" }}
              />
              <MDBRow className="d-flex justify-content-center">
                <MDBCol lg="8">
                  <h5 className="mb-3">Anna Deynah</h5>
                  <p>Web Developer</p>
                  <p className="text-muted">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    "I recommend Tailor Meals to all my clients. The
                    customization options are fantastic, and the quality of the
                    meals is top-notch. It's a great way to maintain a healthy
                    diet without the hassle of meal prep."
                  </p>
                </MDBCol>
              </MDBRow>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <MDBIcon fas icon="star" size="sm" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" />
                </li>
                <li>
                  <MDBIcon far icon="star" size="sm" />
                </li>
              </ul>
            </MDBCarouselItem>
          </MDBCarousel>
        </MDBContainer>
      </div>

      <div className="mx-auto w-50">
        <MDBValidation
          noValidate
          id="form"
          className="text-center "
          style={{ width: "100%" }}
        >
          <h2>Contact us</h2>

          <MDBValidationItem invalid feedback="Please provide your name.">
            <MDBInput
              placeholder="Name"
              v-model="name"
              wrapperClass="mb-4"
              required
            />
          </MDBValidationItem>

          <MDBValidationItem invalid feedback="Please provide your email.">
            <MDBInput
              type="email"
              placeholder="Email address"
              v-model="email"
              wrapperClass="mb-4"
              required
            />
          </MDBValidationItem>

          <MDBValidationItem invalid feedback="Please provide mail subject.">
            <MDBInput
              placeholder="Subject"
              v-model="subject"
              wrapperClass="mb-4"
              required
            />
          </MDBValidationItem>

          <MDBValidationItem invalid feedback="Please provide a message text.">
            <MDBTextArea
              wrapperClass="mb-4"
              placeholder="Type message here"
              required
            />
          </MDBValidationItem>
          <MDBBtn type="submit" color="primary" block className=" my-4">
            Send
          </MDBBtn>
        </MDBValidation>
      </div>

      <section className="newsletter-section">
        <h2 className="mt-4 text-center">Subscribe to our Newsletter</h2>
        <form className="d-flex w-50 justify-content-evenly mx-auto align-items-center my-4">
          <input className="input-field" type="email" placeholder="Your Email" /> &nbsp; &nbsp; &nbsp;
          <button className="submit-button bg-primary" type="submit">Subscribe</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
