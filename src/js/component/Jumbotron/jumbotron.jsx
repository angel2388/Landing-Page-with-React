import React from "react";
import "./jumbotron.css"

const Jumbotron = () => {
    return (
        <div className="container">
        <div className="jumbotron myJumbotron">
  <h1 className="display-4">A Warm Welcome!</h1>
  <p className="lead">Lorem Ipsum is simply the dummy text of printers and text files. Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a gallery of type and mixed it up in such a way as to make a specimen textbook.</p>
  {/* <hr> className="my-4"</hr> */}
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="..." role="button">Call to action!</a>
  </p>
</div>
</div>

    )
}

export default Jumbotron;