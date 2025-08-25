import WatchesCollection from "../WatchesCollection";
import swissWatches from "./Swiss";

export default function SwissCollection ()  {
  return (
    <div>
      <WatchesCollection watches={swissWatches} visibleCount={swissWatches.length} />
    </div>
  );
};
