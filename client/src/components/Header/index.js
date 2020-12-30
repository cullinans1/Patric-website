import React, { useState } from "react";

function Header() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const contactResponse = {
        variables: {
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
        },
      };
      console.log(contactResponse);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div id="small-info">
        <a href="mailto:patric.sepulveda@honestlyeasyrealty.com">
          <i className="far fa-envelope"> Email</i>
        </a>
        <i className="fas fa-phone"> 520.301.4347</i>
        <button
          type="button"
          className="btn btn-outline-light"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Contact Me
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Contact Me
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <input
                      placeholder="Name"
                      name="name"
                      type="name"
                      id="name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Email"
                      name="email"
                      type="email"
                      id="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Phone Number"
                      name="phone"
                      type="phone"
                      id="phone"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Enter Message Here"
                      name="message"
                      type="message"
                      id="message"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      id="submitBtn"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
