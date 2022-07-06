import {FaQuoteRight} from "react-icons/fa";

const ReviewCard = ({data}) => {
  const {image,name,text,job}=data;
  // console.log(data);
  return (
          <div className="text-center p-3 row">
            <div className="imgDiv rounded-circle bg-primary m-auto">
              <div className="quoto rounded-circle bg-primary py-1 px-2 text-white">
              <FaQuoteRight/>
              </div>
              <img  className="rounded-circle" src={image} alt={name} />
            </div>
            <h3 className="pt-4">{name.split(" ").map((item)=>item[0].toUpperCase()+
  item.slice(1)).join(" ")}</h3>
            <h5 className="text-danger">{job.toUpperCase()}</h5>
            <p className="col-10 m-auto">{text}</p>
          </div>
  )
}

export default ReviewCard