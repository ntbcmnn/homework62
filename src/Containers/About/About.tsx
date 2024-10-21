import BackLink from '../../Components/BackLink/BackLink.tsx';

const About = () => {
  return (
    <>
      <div className="container mb-4 mt-5">
        <BackLink page=""/>
        <div className="container my-5 d-flex flex-column gap-4 justify-content-center">
          <div className="bg-dark  text-white rounded-4 py-4 px-5">
            <h3 className="fw-bold mb-4 d-inline-flex align-items-center gap-2">
              <i className="bi bi-person-raised-hand fs-4"></i>
              About me
            </h3>
            <p>Hi! My name's Natasha, and I'm passionate about web app development.
              I'm 22 years old, born and raised in Kyrgyzstan, and I absolutely love learning new things.
            </p>
            <p>
              In addition to web development, I enjoy exploring new frameworks and tools that enhance productivity and
              improve the overall user experience.
            </p>
            <p>
              Over the past few years, I’ve gained experience in developing modern user interfaces, writing clean and
              efficient code, and working with a variety of technologies.
            </p>

          </div>

          <div className="bg-dark  text-white rounded-4 py-4 px-5 d-flex flex-column gap-2">
            <h3 className="fw-bold mb-4 d-inline-flex align-items-center gap-2">
              <i className="bi bi-chevron-double-right"></i>
              Skills
            </h3>
            <p className="d-inline-flex gap-2 align-items-center">
              <i className="bi bi-check-lg"></i>
              HTML, CSS, Figma
            </p>
            <p className="d-inline-flex gap-2 align-items-center">
              <i className="bi bi-check-lg"></i>
              JavaScript
            </p>

            <p className="d-inline-flex gap-2 align-items-center">
              <i className="bi bi-check-lg"></i>
              React
            </p>
            <p className="d-inline-flex gap-2 align-items-center">
              <i className="bi bi-check-lg"></i>
              TypeScript
            </p>
            <p className="d-inline-flex gap-2 align-items-center">
              <i className="bi bi-check-lg"></i>
              Git, GitHub
            </p>
            <p className="d-inline-flex gap-2 align-items-center">
              <i className="bi bi-check-lg"></i>
              REST API
            </p>

            <p>
              I’m always eager to challenge myself and expand my skills, whether it’s through personal projects or
              learning new programming languages and methodologies.
            </p>
          </div>

          <div className="bg-dark  text-white rounded-4 py-4 px-5">
            <h3 className="fw-bold mb-4 d-inline-flex align-items-center gap-2">
              <i className="bi bi-journal-code"></i>
              Education
            </h3>
            <p>For now, i'm studying at Attractor School, where I'm gaining fundamental knowledge in programming and web
              development.</p>
          </div>

          <div className="bg-dark  text-white rounded-4 py-4 px-5">
            <h3 className="fw-bold mb-4 d-inline-flex align-items-center gap-2">
              <i className="bi bi-brightness-high"></i>
              Interests
            </h3>
            <p>
              When i'm not programming, I love travelling, and, for the last 2 years, I really enjoy hiking, because I
              was
              born in such a beautiful mountainous country! Hiking gives me a lot of energy to move on and reach my
              goals
              :)
            </p>
            <p>
              Also I like to go to the gym, because it gives me energy and some kind of socialisation.
            </p>
            <p>
              Sometimes i like to draw, but i spend almost 80% of my time listening to music while working out at the
              gym or
              doing chores.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;