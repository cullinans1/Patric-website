import React from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'
import { useMutation } from "@apollo/react-hooks";
import { DELETE_BLOG } from "../../utils/mutations";

function Blog(blog) {
  const { _id, title, image, description, link } = blog;
  const [deleteBlog] = useMutation(DELETE_BLOG);

  const handleDeleteBlog = async (event) => {
    event.preventDefault();
    let confirm = window.confirm("Are you sure?");
    if (confirm == true) {
      try {
        await deleteBlog({
          variables: {
            _id: _id,
          },
        }).then(() => window.location.reload(false));
      } catch (e) {
        console.log("e:", e);
      }
    } else {
      event.preventDefault();
      console.log("didn't delete");
    }
  };

  if (Auth.loggedIn()) {
    return (
      <div className="card col-lg-4">
        {image ? (
          <img className="card-img-top" alt={image} src={`/images/${image}`} />
        ) : (
          <img className="card-img-top" alt={title} src={`/images/HSred.png`} />
        )}
        <div className="card card-header">
          <h4 className="card-title">{title}</h4>
        </div>
        <div className="card card-body">
          <p id="blog-description">{description}</p>
          <Link to={`blogs/${_id}`}>
            <p>Read Full Article INSERT ARROW HERE</p>
          </Link>
          {link ? (
            <p>
              {" "}
              Visit this ARROW HERE <Link to={link}>article</Link>{" "}
            </p>
          ) : null}
        </div>
        <button
          className="btn btn-danger"
          type="button"
          onClick={handleDeleteBlog}
        >
          Delete blog
        </button>
      </div>
    );
  } else {
    return (
      <div className="card col-lg-4">
        {image ? (
          <img className="card-img-top" alt={image} src={`/images/${image}`} />
        ) : (
          <img className="card-img-top" alt={title} src={`/images/HSred.png`} />
        )}
        <div className="card card-header">
          <h4 className="card-title">{title}</h4>
        </div>
        <div className="card card-body">
          <p id="blog-description">{description}</p>
          <Link to={`blogs/${_id}`}>
            <p>Read Full Article INSERT ARROW HERE</p>
          </Link>
          {link ? (
            <p>
              {" "}
              Visit this ARROW HERE <Link to={link}>article</Link>{" "}
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Blog;
