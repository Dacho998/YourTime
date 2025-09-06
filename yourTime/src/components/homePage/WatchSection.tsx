import { useState } from "react";
import WatchesCollection from "../watches/WatchesCollection";

interface WatchesSectionProps {
  title: string;
  watches: any[];  
  initialVisible?: number;
}

export default function WatchesSection({ title, watches, initialVisible = 3 }: WatchesSectionProps) {
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const loadMore = () => setVisibleCount(visibleCount + 3);
  const showLess = () => setVisibleCount(Math.max(3, visibleCount - 3));

  return (
    <section className="collections-preview">
      <h2>{title}</h2>
      <WatchesCollection watches={watches} visibleCount={visibleCount} />
      <div className="buttons-container">
        {visibleCount < watches.length && (
          <button className="load-more-btn" onClick={loadMore}>Load More</button>
        )}
        {visibleCount > 3 && (
          <button className="load-more-btn" onClick={showLess}>Show Less</button>
        )}
      </div>
    </section>
  );
}
