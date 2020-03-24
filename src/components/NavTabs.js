import React from "react";

//import "./style.css";


import "./NavStyle.css";
//import NavTabs from "./NavTabs";


  function NavTabs(props) {
    return (
      //   <nav class="navbar navbar-expand-lg navbar-light bg-light">
      //   <div class="container">
      //     <a class="navbar-brand" href="index.html" id="logo">Keegan Nair</a>
      //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
      //       aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      //       <span class="navbar-toggler-icon"></span>
      //     </button>
      //     <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      //       <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      //           <a class="nav-link" href="About">Contact</a>

      //           <a class="nav-link" href="portfolio.html">Portfolio</a>
      //           <a class="nav-link" href="index.html">About</a>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="index.html" id="logo">Keegan Nair</a>


          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <a
              href="#about"
              onClick={() => props.handlePageChange("About")}
              className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
            >
              About
          </a>
          </ul>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <a
              href="#blog"
              onClick={() => props.handlePageChange("Blog")}
              className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
            >
              Portfolio
          </a>
          </ul>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <a
              href="#contact"
              onClick={() => props.handlePageChange("Contact")}
              className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
            >
              Contact
          </a>
          </ul>
        </div>
      </nav>
    );
  }

  export default NavTabs;
