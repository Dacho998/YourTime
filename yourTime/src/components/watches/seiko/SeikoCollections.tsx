import React from "react";
import WatchesCollection from "../WatchesCollection";
import seikoWatches from "./Seiko";

const SeikoCollection: React.FC = () => {
  return (
    <div>
      <WatchesCollection watches={seikoWatches} visibleCount={seikoWatches.length} />
    </div>
  );
};

export default SeikoCollection;