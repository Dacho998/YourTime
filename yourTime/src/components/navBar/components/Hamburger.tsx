interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function Hamburger({ isOpen, onClick }: HamburgerProps) {
  return (
    <div
      className={`hamburger ${isOpen ? "active" : ""}`}
      onClick={onClick}
      aria-label="Menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
