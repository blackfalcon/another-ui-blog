import React, { Component } from "react";

class NotFound extends Component {

  render() {
    return (
      <section>
        <h1 className="auro_heading auro_heading--display">404: page not found</h1>

        <p>
          Oops. We see that you tried to find something that is not here. Sorry. Maybe the URL changed? Maybe you typed in the wrong address?
        </p>

        <p>Either way, you landed in the wrong place. Please look over the nav to your left and maybe you can find what you were looking for.</p>

        <p>Thanks! Have a nice day!</p>
      </section>
    );
  }
}

export default NotFound;
