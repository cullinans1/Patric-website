import React, { useEffect } from "react";
// import Auth from "../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ALL_BLOGS } from "../utils/queries";
import { UPDATE_BLOGS } from "../utils/actions";
import spinner from '../assets/images/spinner.gif';
import Blog from "../components/Blogs";

function AllBlogs() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { loading, data } = useQuery(QUERY_ALL_BLOGS);
  console.log("data: ", data);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_BLOGS,
        blogs: data.blogs,
      });
    }
  }, [data, loading, dispatch]);

  function returnBlogs() {
    return state.blogs;
  }

  return (
    <div className="container-fluid">
      <h2> Learn About Reality: </h2>
      {state.blogs.length ? (
        <div className="row blog-cards">
          {returnBlogs().map((blog) => (
            <Blog
              key={blog._id}
              _id={blog._id}
              title={blog.title}
              image={blog.image}
              description={blog.description}
              content={blog.content}
              link={blog.link}
            />
          ))}
        </div>
      ) : (
        <h3>No blogs!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}
export default AllBlogs;