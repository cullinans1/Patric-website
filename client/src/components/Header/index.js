import React, { useState } from "react";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/react-hooks";
import { CONTACT_ME } from "../../utils/mutations";

function Header() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [addContact] = useMutation(CONTACT_ME);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const contactResponse = await addContact({
        variables: {
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
        },
      });
      console.log(contactResponse);
      var thankYouMsg = document.querySelector(".thank-you");
      thankYouMsg.removeAttribute("id");
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
  if (Auth.loggedIn()) {
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
          <button
            className="btn btn-outline-secondary d-lg-inline-block mb-3 mb-md-0 ml-md-3"
            id="logout-btn"
          >
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
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
                        required
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
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        placeholder="Phone Number"
                        name="phone"
                        type="phone"
                        id="phone"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        placeholder="Enter Message Here"
                        name="message"
                        type="message"
                        id="message"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="modal-footer">
                      <div className="thank-you" id="hidden">
                        <h3> Thanks we will be in touch </h3>
                      </div>
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
          <div className="modal-dialog modal-dialog-centered">
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
                      required
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
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Phone Number"
                      name="phone"
                      type="phone"
                      id="phone"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Enter Message Here"
                      name="message"
                      type="message"
                      id="message"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="modal-footer">
                    <div className="thank-you" id="hidden">
                      <h3> Thanks we will be in touch </h3>
                    </div>
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
