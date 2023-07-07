function Header() {
    return (
      <div className="navigation">
        <nav>
          Connect me through
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
        </nav>
      </div>
    );
  }
  
  function MainBody() {
    return (
      <div className="description">
        <p>
          <h2>Hello all, I'm Lavanya.</h2>
          <p>
            Welcome to my web page featuring three of my frontend projects! This
            collection showcases my skills and creativity in web development,
            utilizing HTML, CSS, and JavaScript for each project.
          </p>
        </p>
      </div>
    );
  }
  
  function Box({ id, title, description ,link}) {
    return (
      <div className="box" id={id}>
        <h3>{title}</h3>
        <div className="p-img"></div>
        <p>{description}</p>
        <button>
          <a href={link} target="_blank" >Go Live</a>
        </button>
      </div>
    );
  }
  
  function Footer() {
    return (
      <footer>
        <p>Made with 🧡 by Lavanya</p>
      </footer>
    );
  }
  
  function Page() {
    return (
      <div>
        <Header />
        <MainBody/>
        <div className="box-container">
        <div className="boxes">
          <Box
            id="box1"
            title="Amazon Clone"
            description="The Amazon Clone project is a visually similar web application inspired by the popular e-commerce platform, Amazon.It replicates the look and layout of Amazon."
            link="https://lavanyaindapure.github.io/AmazonClone-Frontend/"
          />
          <Box
            id="box2"
            title="Image Searcher"
            description="The Image Searcher project allows users to search for images based on their input keywords. Users can enter search queries into the search box and the application retrieves relevant images from an external image search API."
            link="https://lavanyaindapure.github.io/ImageSearcher/"
          />
          <Box
            id="box3"
            title="Simple Timer"
            description="The Simple Timer project is a web application that provides a basic timer functionality. Users can set a specific duration and start the timer, which counts down in real-time."
            link="https://lavanyaindapure.github.io/Timer-JS/"
          />
        </div>
        <Footer />
      </div>
        </div>
    );
  }
  
  ReactDOM.render(<Page />, document.getElementById("root"));
  