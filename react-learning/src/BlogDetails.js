import { useNavigate, useParams } from "react-router-dom";
import useFatch from "./useFatch";
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error , isPending} = useFatch('http://localhost:8080/blogs/' + id);
    const history = useNavigate();
    const hendleClick = () =>{
        fetch('http://localhost:8080/blogs/' + blog.id ,{
            method:'DELETE'
        }).then(() =>{
            history('/');
        })
    }
    return (
        <div className="blog-details">
            {/* <h2>{id} </h2> */}
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>Written by{ blog.author }</p>
                <div> { blog.body }</div>
                <div className="Delete-btn">
                <button onClick={hendleClick}> Delete </button>
                </div>
            </article>
            )}
        </div>
    );
  
}
 
export default BlogDetails;