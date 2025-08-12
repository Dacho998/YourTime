import React from "react";
import WatchesCollection from "../WatchesCollection";
import swissWatches from "./Swiss";

const SwissCollection: React.FC = () => {
  return (
    <div>
      <WatchesCollection watches={swissWatches} visibleCount={swissWatches.length} />
    </div>
  );
};

export default SwissCollection;