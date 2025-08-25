import WatchesCollection from "../WatchesCollection";
import festinaWatches from "./Festina";

export default function FestinaCollection() {
  return (
    <div>
      <WatchesCollection watches={festinaWatches} visibleCount={festinaWatches.length} />
    </div>
  );
};
