import { useEffect, useState } from "react";

const useComments=()=>{
    const [comments, setComments]= useState([]);
    const [dataLoad, setDataLoad]= useState(false)
    
const postComments=(comment)=>{
    fetch('https://writehubs.herokuapp.com/comments', {
        method: 'POST',
        headers: {
              'content-type': 'application/json'
        },
        body: JSON.stringify(comment)
  })
  .then(res=> res.json())
  .then(data=>{
      console.log(data)
      setDataLoad(data.acknowledged)
      alert('Submit')
  })
}

useEffect(()=>{
    fetch('https://writehubs.herokuapp.com/comments')
    .then(res=> res.json())
    .then(data=> {
        setComments(data)
        setDataLoad(false)
    })
},[dataLoad])

return{
    postComments,
    comments,
    dataLoad
}
}

export default useComments;