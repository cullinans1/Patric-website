import React, { useEffect, useState } from "react";
import Auth from "../utils/auth";
// import { useDispatch, useSelector } from "react-redux";
import { ADD_BLOG } from "../utils/mutations";
import { useMutation } from "@apollo/react-hooks";
// import spinner from "../assets/images/spinner.gif";
import Blog from "../components/Blogs";

function NewBlog() {
  const { _id, title, image, description, content, link } = Blog;
  const [formState, setFormState] = useState({
    title: "",
    image: "",
    description: "",
    content: "",
    link: "",
  });
  const [addBlog] = useMutation(ADD_BLOG);

  const handleNewBlog = async (event) => {
    event.preventDefault();

    try {
      await addBlog({
        variables: {
          title: formState.title,
          image: formState.image,
          description: formState.description,
          content: formState.content,
          link: formState.link,
        },
      }).then(() => window.location.reload(false));
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

  if (Auth.loggedIn) {
    return (
      <div className="container-fluid">
        <h2>Create a new blog</h2>

        <form
          id="new-blog-form"
          className="card card-body"
          onSubmit={handleNewBlog}
        >
          <div className="form-group">
            <input
              name="title"
              type="title"
              id="title"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              name="image"
              type="text"
              id="image"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <textarea
              name="description"
              type="description"
              id="description"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <textarea
              name="content"
              type="content"
              id="content"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              name="link"
              type="link"
              id="link"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-lg btn-success">
              Create Blog!
            </button>
          </div>
        </form>
      </div>
    );
  } else {
  }
}
export default NewBlog;
