import "./css/HomePage.css";
import "./css/HomePageResponsive.css"
import heroImg from "../../assets/assetsHomepage/heroImg.png";
import WatchesSection from "./WatchSection";
import swissWatches from "../watches/SwissMilitary/Swiss";
import festinaWatches from "../watches/festina/Festina"; 
import seikoWatches from "../watches/seiko/Seiko";     

export default function HomePage () {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Timeless Elegance</h1>
          <p>Seiko • Festina • Swiss Military</p>
        </div>
        <img src={heroImg} alt="Hero watches" className="hero-img" />
      </section>

      <WatchesSection title="Festina Collection" watches={festinaWatches} />
      <WatchesSection title="Seiko Collection" watches={seikoWatches} />
      <WatchesSection title="Swiss Military Collection" watches={swissWatches} />
    </>
  );
}
