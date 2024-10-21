import '../../App.css';
import BackLink from '../../Components/BackLink/BackLink.tsx';

const Contacts = () => {
  return (
    <>
      <div className="container mt-5 mb-4">
        <BackLink page=""/>
      </div>

        <div className="container my-5 bg-dark rounded-4 p-5 w-25 d-flex flex-column gap-4">
          <p className="text-white fs-4">You can find me on:</p>
          <a href="https://github.com/ntbcmnn/"
             target="_blank"
             className="d-flex align-items-center gap-2 text-decoration-none fs-5 custom-link">
            <i className="bi bi-github"></i>
            GitHub
          </a>

          <a href="https://t.me/ntbcmn"
             target="_blank"
             className="d-flex align-items-center  gap-2 text-decoration-none fs-5 custom-link">
            <i className="bi bi-telegram"></i>
            Telegram
          </a>

          <a href="https://www.instagram.com/ntbcmn?igsh=ajMwMXFib2w3eG96"
             target="_blank"
             className="d-flex align-items-center  gap-2 text-decoration-none fs-5 custom-link">
            <i className="bi bi-instagram"></i>
            Instagram
          </a>
        </div>
      </>

      );
      };

      export default Contacts;