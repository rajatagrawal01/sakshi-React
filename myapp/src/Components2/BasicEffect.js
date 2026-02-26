import {useEffect} from 'react'

export default function BasicEffect() {
    useEffect(()=>{
        // console.log("Component Loaded");
        alert("Welcome")
    },[])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
