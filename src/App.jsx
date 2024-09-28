
import  NetflixSeries from "./components/NetflixSeries ";
import "./components/Netflix.css";

export const App = () => {
  return (
   <section className="container" style={{backgroundColor:"#fff"}}>
    <h1 className="card-heading">List of Some Good Series</h1>
      <NetflixSeries  />
  </section> 
  );
};
export default App;




