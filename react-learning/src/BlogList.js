// First method 
// const BlogList = (props) => {
// const blogs = props.blogs;
// const title = props.title;
// console.log(props , blogs)
import React from "react";
import { Link } from "react-router-dom";
   
//Second method
const BlogList = ({blogs, title , //handelDelet
}) => {
    return ( 
    <div className="blog-list">
      <h2>{title}</h2>
         {blogs.map((blog) => (
        <div className="new-blog"  key={blog.id}>
          <Link to={`/blogs/${encodeURIComponent(blog.id)}`}> 
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          </Link>
         
          {/* <button onClick={()=> handelDelet(blog.id) }>Delet Me</button> */}
        </div>
      ))}
    </div> );
}
 
export default BlogList;