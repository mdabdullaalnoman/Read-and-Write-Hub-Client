import { useEffect, useState } from "react";

const useBlogs=()=>{

    const [blogs, setBlogs]= useState([]);
    const [dataLoad, setDataLoad]= useState(false)
    
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
        setDataLoad(false)
    })
},[dataLoad])

    
const confirmBlog = id => {
    const uniqueId = { blogId: id }
    fetch('https://writehubs.herokuapp.com/blogs/confirm', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(uniqueId)
    })
        .then(res => res.json())
        .then(data => {
            setDataLoad(data.acknowledged)
            return alert('Blog Confirm')
        })
}


const deletBlog = id => {
    const proceed = window.confirm('Are you Sure to delete this blog? ')
    if (proceed) {
        const url = `https://writehubs.herokuapp.com/blogs/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Delete Succesfully');
                    const reminddoctors = blogs.filter(doctor => doctor._id !== id)
                    setBlogs(reminddoctors)
                }
            })

    }

}

return {
    postBlog ,
    blogs,
    confirmBlog,
    deletBlog
}
}
export default useBlogs;