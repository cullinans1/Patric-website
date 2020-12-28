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
                <form>
                  <div className="form-row">
                    <div className="form-group col-12">
                      <label htmlFor="inputFirstName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputFirstName"
                      />
                    </div>
                    <div className="form-group col-12">
                      <label htmlFor="inputLastName">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputLastName"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputNumber">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputNumber"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12">
                      <label htmlFor="FormControlTextarea1">
                        Send me a message{" "}
                      </label>
                      <textarea
                        className="form-control"
                        id="formControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                  </div>
                </form>
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
                  type="button"
                  className="btn btn-secondary"
                  id="submitBtn"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
