import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer d-flex direction-column align-center">
      <p>
        Made with{" "}
        <span role="img" aria-label="Love">
          ❤️
        </span>{" "}
        by Shreya Gupta
      </p>
      <div className="d-flex gap align-center padding-all-8">
        <a
          href="https://github.com/19shreya09"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="source-image"
            src="https://therightfit.netlify.app/assets/github-logo.png"
            alt="GitHub"
          />
        </a>
       
        <a
          href="https://www.linkedin.com/in/shreya-gupta-a01a36221/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="source-image"
            src="https://therightfit.netlify.app/assets/linkedin.png"
            alt="LinkedIn"
          />
        </a>
      </div>
    </footer>
  );
};
