import React,{useEffect,useState} from "react";

export default function ApiCallAsync() {
  const [apiData, setApiData] = useState([]);
  const [loading,setLoading] =useState(true);

  const demoAPI = "https://jsonplaceholder.typicode.com/users";
  const fetchAPI = async () => {
    try {
      const res = await fetch(demoAPI);
      const data = await res.json();
      setApiData(data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  console.log(apiData);
  
  if(loading){
    return(
    <>
    <h1>Loading</h1>
    </>
  )
  }
  return(
    <>
    <h1>Welcome</h1>
    </>
  )
}
