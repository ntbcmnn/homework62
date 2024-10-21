import { Link } from 'react-router-dom';
import '../../App.css';

const Home = () => {
  return (
    <div className="container my-5">
      <div className="my-5 d-flex flex-column align-items-center">
        <h2 className="mb-5">Hi!</h2>
        <div className="bg-dark  text-white rounded-4 p-4 w-50">
          <p className="fw-bold fs-4">
            My name is Natasha and I'm a beginner frontend-developer.
          </p>
          <p>
            I've created this site as a portfolio, and hope
            you'll be interested in my
            works!
          </p>
          <p>
            Here you'll learn more about me and my projects. Use the navigation to visit
            the following pages:
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-stretch gap-3">

        <div className=" d-flex flex-column gap-3 bg-dark  text-white rounded-4 py-4 px-5 w-50">
          <div className="d-flex align-items-center gap-2">
            <Link to="/about" className="fs-4 fw-bold custom-link d-inline-flex gap-2 align-items-center">About
              <i className="bi bi-arrow-right fs-3"></i>
            </Link>
          </div>
          <p className="m-0 p-0">
            Here you'll find detailed information about me and my professional skills.
          </p>
        </div>

        <div className="  d-flex flex-column gap-3 bg-dark  text-white rounded-4 py-4 px-5 w-50">
          <div className="d-flex align-items-center gap-2">
            <Link to="/projects" className="fs-4 fw-bold custom-link d-inline-flex gap-2 align-items-center">Projects
              <i className="bi bi-arrow-right fs-3"></i>
            </Link>
          </div>
          <p className="m-0 p-0">
            Check out some of the projects I've worked on. You'll find interactive
            examples of them there.
          </p>
        </div>

        <div className=" d-flex flex-column gap-3 bg-dark text-white rounded-4  py-4 px-5 w-50">
          <div className="d-flex align-items-center gap-2">
            <Link to="/contacts" className="fs-4 fw-bold custom-link d-inline-flex gap-2 align-items-center">Contacts
              <i className="bi bi-arrow-right fs-3"></i>
            </Link>
          </div>
          <p className="m-0 p-0">
            If you want to get in touch with me, go to this page - my contact info will wait there.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Home;