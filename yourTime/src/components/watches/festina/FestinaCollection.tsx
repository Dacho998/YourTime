import React from "react";
import WatchesCollection from "../WatchesCollection";
import festinaWatches from "./Festina";

const FestinaCollection: React.FC = () => {
  return (
    <div>
      <WatchesCollection watches={festinaWatches} visibleCount={festinaWatches.length} />
    </div>
  );
};

export default FestinaCollection;
