import { Link } from 'react-router-dom';
import BackLink from '../../Components/BackLink/BackLink.tsx';

const Projects = () => {
  return (
    <>
      <div className="container mb-4 mt-5">
        <BackLink page=""/>
      </div>

      <div className="container my-5 d-flex gap-4">
        <div className="d-flex flex-column bg-dark text-white p-4 rounded-4 w-100 align-items-center">
          <div className="d-flex flex-column align-items-center mb-3">
            <Link to="/countries" className="text-uppercase custom-link fs-2 mb-4 d-inline-flex gap-3">
              Countries
              <i className="bi bi-globe-central-south-asia"></i>
            </Link>

            <p className="fs-6 fw-bold ">
              This project is a web application that displays a list of countries and provides brief information about
              each
              of them.
            </p>

            <p className="fs-6">
              Users can search for a specific country, view detailed information about it, and see a list of neighboring
              countries. The app fetches data from the
              <a href="https://restcountries.com/" target="_blank"
                 className="fw-bold text-decoration-none custom-link"> Rest Countries API </a>
              and presents key details like the country's
              flag, capital, population, region, and borders. Additionally, users can explore information about
              neighboring countries through links or by using Wikipedia API integration for further research.
            </p>
          </div>

          <Link to="/countries" className="custom-link fs-5 mt-auto d-inline-flex gap-2">
            View project
            <i className="bi bi-arrow-right-circle"></i>
          </Link>
        </div>

        <div className="d-flex flex-column bg-dark text-white p-4 rounded-4 w-100 align-items-center">
          <div className="d-flex flex-column align-items-center  mb-3">
            <Link to="/feed" className="text-uppercase custom-link fs-2 mb-4 d-inline-flex gap-3">
              Feed
              <i className="bi bi-chat-dots"></i>
            </Link>

            <p className="fs-6 fw-bold ">
              This project is a real-time chat application built with React. It allows users to send and receive
              messages,
              simulating a live chat experience.
            </p>

            <p className="fs-6">
              The application is designed with a clean and intuitive interface where
              users can enter messages, view past conversations, and see real-time updates without needing to refresh
              the
              page.
            </p>
          </div>

          <Link to="/feed" className="custom-link fs-5 mt-auto d-inline-flex gap-2">
            View project
            <i className="bi bi-arrow-right-circle"></i>
          </Link>
        </div>


        <div className="d-flex flex-column bg-dark text-white p-4 rounded-4 w-100 align-items-center">
          <div className="d-flex flex-column align-items-center  mb-3">
            <Link to="/fastfood" className="text-uppercase custom-link fs-2 mb-4 d-inline-flex gap-3">
              Fast food
              <i className="bi bi-egg-fried"></i>
            </Link>

            <p className="fs-6 fw-bold ">
              This project is a fast food ordering simulation where users can browse a menu of food items and add their
              selections to an order.
            </p>

            <p className="fs-6">
              The app provides a simple and intuitive interface for selecting various dishes, and
              it dynamically updates the total cost as users add or remove items from their order. The goal is to
              simulate
              a typical fast food ordering experience with a focus on user interaction and order management.
            </p>
          </div>

          <Link to="/fastfood" className="custom-link fs-5 mt-auto d-inline-flex gap-2">
            View project
            <i className="bi bi-arrow-right-circle"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;