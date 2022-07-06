import { useState } from "react"
import reviews from "../helper/data"
import ReviewCard from "./ReviewCard";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";



const Reviews = () => {
    const [index,setIndex]=useState(0)
    const [data,setData]=useState(reviews[index]);
    // console.log(data)

    const handleInc = ()=>{
        let newIndex=0;
        if(index==3){
            setIndex(0)
            setData(reviews[0])
        }else{
            newIndex=index+1
          setIndex(newIndex)
          setData(reviews[newIndex])
        }
        
    };
     const handleDec= ()=>{
        let newIndex=0;
        if(index==0){
            setIndex(3)
            setData(reviews[3])
        }else{
            newIndex=index-1
            setIndex(newIndex)
            setData(reviews[newIndex])
        }
     }
     const handleRandom = ()=>{
        let randomNum=Math.floor(Math.random()*reviews.length);
        randomNum==index && randomNum++;
        if(randomNum>3){
            randomNum=Math.floor(Math.random()*reviews.length);
        };
        // console.log(randomNum);
        setIndex(randomNum)
        setData(reviews[randomNum])

     }

  return (
    <main className="main col-md-6 m-auto mt-4 p-2">
        <ReviewCard data={data}/>
        <div className="text-center">
        <div className="arrows">
            <button className="previous border-0 fs-2 p-1 text-success bg-white" onClick={handleDec}><FaArrowCircleLeft/> </button>
            <button className="next border-0 fs-2 p-1 text-success bg-white" onClick={handleInc}><FaArrowCircleRight/> </button>
        </div>
        <div className="m-2">
            <button className="surprise p-1 border-0 rounded-3" onClick={handleRandom}>Surprise Me</button>
        </div>
        </div>
    </main>
  )
}

export default Reviews;