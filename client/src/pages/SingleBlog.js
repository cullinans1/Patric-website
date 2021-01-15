import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useDispatch, useSelector } from "react-redux";
import { QUERY_ALL_BLOGS } from "../utils/queries";
import { EDIT_BLOG } from "../utils/mutations";
import { UPDATE_BLOGS } from "../utils/actions";
import spinner from "../assets/images/spinner.gif";
// import Blog from "../components/Blogs";

function SingleBlog() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id } = useParams();

  const [currentBlog, setCurrentBlog] = useState({});

  const { loading, data } = useQuery(QUERY_ALL_BLOGS);
  const { blogs } = state;

  useEffect(() => {
    if (blogs.length) {
      setCurrentBlog(blogs.find((blog) => blog._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_BLOGS,
        blogs: data.blogs,
      });
    }
  }, [blogs, data, loading, dispatch, id]);


  //functions to delete blog post or edit as admin

  return (
    <>
      {currentBlog ? (
        <div className="single-blog-selected container-fluid">
            <Link to="/blogs">
            <button className="btn btn-lg btn-outline-secondary product-btn">
              ← Back to All Blogs
            </button>
          </Link>
          <div className="row col-10">
            {currentBlog.image ? (
              <img
                className="card-img-top"
                alt={currentBlog.image}
                src={`/images/${currentBlog.image}`}
              />
            ) : (
              <img
                className="card-img-top"
                alt={currentBlog.title}
                src={`/images/HSred.png`}
              />
            )}
          </div>
          <div className="row col-12 align-self-center">
            <h2 id="blog-title">{currentBlog.title}</h2>
          </div>
          <div className="row col-10 align-self-center">
            <p className="blog-content">{currentBlog.content}</p>
          </div>
        
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </>
  );
}
export default SingleBlog;
