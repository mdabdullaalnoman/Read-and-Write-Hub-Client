import { useEffect, useState } from "react";

const useBlogs=()=>{

    const [blogs, setBlogs]= useState([]);
    
const postBlog=(blog)=>{
    fetch('https://writehubs.herokuapp.com/blogs', {
        method: 'POST',
        headers: {
              'content-type': 'application/json'
        },
        body: JSON.stringify(blog)
  })
  .then(res=> res.json())
  .then(data=>{
      console.log(data)
      alert('Submit')
  })
}

useEffect(()=>{
    fetch('https://writehubs.herokuapp.com/blogs')
    .then(res=> res.json())
    .then(data=> {
        setBlogs(data)
        console.log(data)
    })
},[])

    


return {
    postBlog ,
    blogs
}
}
export default useBlogs;