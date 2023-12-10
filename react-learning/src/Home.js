// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFatch from "./useFatch";
// import{}
const Home = () => {
  const {
    data: blogs,
    isPanding,
    error,
  } = useFatch(" http://localhost:8080/blogs/");
  //   {title: "Biggest Crimes", body: "Hi Ghanster...", author: "Syed", id: 1,},
  //   { title: "Your identity", body: "Hi Im khan...", author: "Qasim ", id: 2 },
  //   { title: "Best friend", body: "Hi Ghanster...", author: "Jamal", id: 3 },
  //   { title: "Best Way", body: "My OWN DATA...", author: "Syed", id: 4 },
  // ]);
  // const [name, setName] = useState('Jamal');
  // const handelDelet = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlog(newBlogs);
  // };

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isPanding && <div className="Loading">Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs" /* handelDelet = {handelDelet}*/
        />
      )}
      {/* <button onClick={() =>setName('Syed Qasim Rehman')}>Change Name</button> */}
      {/* <p>{name}</p> */}
      {/* <BlogList blogs={blogs.filter((blog)=>  blog.author === 'Syed' )} title = "Qasim blogs"/> */}
    </div>
  );
};

export default Home;
