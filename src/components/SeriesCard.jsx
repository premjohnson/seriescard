 export const SeriesCard = ({data}) => {
    // console.log(props);
    const {id, img_url,name,rating,description,cast,genre,watch_url} = data;
    const btn_style = {
      padding:"1.1rem 2.2rem",
      border:"none",
      fontSize:"1.5rem",
      backgroundColor: `${rating >= 8.5 ? "#56d388" : "#f7dc6f"}`,
      color:"#fff"
    };
  const ratingmain =   rating >= 8.5 ? "hit" : "average";

    return(
        <li className="card">
        <div>
         <img src={img_url} alt={name} width="40%"  height="40%" />
       </div>
       <div className="card-content">
       <h2> Name: {name}</h2>
       <p style={{fontSize:"20px"}}>Rating: 
        <span className={`rating ${ratingmain}`}>{rating}</span>
        </p>
       <p className="text-3xl font-bold underline">Summary: {description}</p>
       <p>Genre: {genre}</p>
       <p>Cast: {cast}</p>
       <a href={watch_url } target="_blank">
           <button style={btn_style}>Watch Now</button>
       </a>
       </div>
     </li>
     );
};
// {/* <div className="card-content"> */}   </div>