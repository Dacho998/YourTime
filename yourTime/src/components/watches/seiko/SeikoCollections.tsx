import WatchesCollection from "../WatchesCollection";
import seikoWatches from "./Seiko";

export default function SeikoCollection()  {
  return (
    <div>
      <WatchesCollection watches={seikoWatches} visibleCount={seikoWatches.length} />
    </div>
  );
};
