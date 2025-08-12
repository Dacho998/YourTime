import React, { useState } from "react";
import "./HomePage.css";
import heroImg from "../../assets/assetsHomepage/heroImg.png";
import WatchesCollection from "../watches/WatchesCollection";
import  swissWatches  from "../watches/SwissMilitary/Swiss";
import  festinaWatches  from "../watches/festina/Festina"; 
import  seikoWatches  from "../watches/seiko/Seiko";     

const HomePage = () => {
  const [festinaVisible, setFestinaVisible] = useState(3);
  const [seikoVisible, setSeikoVisible] = useState(3);
  const [swissVisible, setSwissVisible] = useState(3);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Timeless Elegance</h1>
          <p>Seiko • Festina • Swiss Military</p>
        </div>
        <img src={heroImg} alt="Hero watches" className="hero-img" />
      </section>
     <section className="collections-preview">
  <h2>Festina Collection</h2>
  <WatchesCollection watches={festinaWatches} visibleCount={festinaVisible} />
  {festinaVisible < festinaWatches.length && (
    <button
      className="load-more-btn"
      onClick={() => setFestinaVisible(festinaVisible + 3)}
    >
      Load More
    </button>
  )}
  {festinaVisible > 3 && (
    <button
      className="load-more-btn"
      onClick={() => setFestinaVisible(festinaVisible - 3)}
    >
      Show Less
    </button>
  )}
<br/>
  <br/>
  <h2>Seiko Collection</h2>
  <WatchesCollection watches={seikoWatches} visibleCount={seikoVisible} />
  {seikoVisible < seikoWatches.length && (
    <button
      className="load-more-btn"
      onClick={() => setSeikoVisible(seikoVisible + 3)}
    >
      Load More
    </button>
  )}
  {seikoVisible > 3 && (
    <button
      className="load-more-btn"
      onClick={() => setSeikoVisible(seikoVisible - 3)}
    >
      Show Less
    </button>
  )}
<br/>
  <br/>
  <h2>Swiss Military Collection</h2>
  <WatchesCollection watches={swissWatches} visibleCount={swissVisible} />
  {swissVisible < swissWatches.length && (
    <button
      className="load-more-btn"
      onClick={() => setSwissVisible(swissVisible + 3)}
    >
      Load More
    </button>
  )}
  {swissVisible > 3 && (
    <button
      className="load-more-btn"
      onClick={() => setSwissVisible(swissVisible - 3)}
    >
      Show Less
    </button>
  )}
</section>
    </>
  );
};

export default HomePage;
