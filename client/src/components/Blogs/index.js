import React from "react";
import { Link } from "react-router-dom";

function Blog(blog) {
  const { _id, title, image, decscription, link } = blog;

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
        <p id="blog-description">{decscription}</p>
        <Link to={`blogs/${_id}`}>
          <p>Read Full Article INSERT ARROW HERE</p>
        </Link>
        {link ? <p> Visit this ARROW HERE <Link to = {link}>article</Link> </p> : null}
      </div>
    </div>
  );
}

export default Blog;
