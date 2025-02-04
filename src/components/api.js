import { useEffect,useState } from 'react';
import axios from 'axios';

const count=1;
function LoadImages(){
  const [state,setState] = useState([]);
  useEffect(()=>{
    axios
  .get("https://api.unsplash.com/photos?client_id=is-ALhNXV0weOtTRTapDSSqpLu--pVilwWCbl-T4aSQ")
  .then((data)=>{
    console.log(data);
    setState(data.data);
  })
 
  },[count])
  return state;
}
function SearchImages(query){
  const [state,setState] = useState([]);
  useEffect(()=>{
    axios
  .get("https://api.unsplash.com/search/photos?query="+query+"&client_id=is-ALhNXV0weOtTRTapDSSqpLu--pVilwWCbl-T4aSQ")
  .then((data)=>{
    console.log(data);
    setState(data.data.results);
  })
 
  },[query])
  return state;
}
export {LoadImages};
export {SearchImages};