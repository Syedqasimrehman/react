import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const [title ,setTitle] = useState('');
    const [body ,setBody] = useState('');
    const [author ,setAuthor] = useState('Syed');
    const [isPending ,setIsPending] = useState(false);
    const history = useNavigate();
    const hendleSubmit = e =>{
        e.preventDefault();
        const blog = {title ,body ,author};

        setIsPending(true);


        fetch('http://localhost:8080/blogs',
        {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body : JSON.stringify(blog)
        }).then(()=>{
            console.log("Blog is added");
            setIsPending(false);
            history('/');
        })
    }
    return (  
        <div className="create">
            <h2>Add a new blogs</h2>
            <form onSubmit={ hendleSubmit }>
                <label>Blog title:</label>
                <input
                // placeholder="Blog title"
                type="text"
                required
                value={title}
                onChange={ (e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                // placeholder="Blog body"
                type="text"
                required
                value={body}
                onChange={ e=> setBody(e.target.value)}
                >
                </textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={e => setAuthor(e.target.value)}>
                    <option value=" Syed">Syed</option>
                    <option value=" Khan">Khan</option>
                    <option value=" USO Student">USO Student</option>
                </select>
                    { !isPending && <button>Add blog</button> }
                    { isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;