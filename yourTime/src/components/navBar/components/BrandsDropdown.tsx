import { Link } from "react-router-dom";

interface BrandDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onItemClick: () => void;
}

const brands = ["FESTINA", "SEIKO", "SWISS-MILITARY"];

export default function BrandDropdown({
  isOpen,
  onClose,
  onItemClick,
}: BrandDropdownProps) {
  if (!isOpen) return null;

  return (
    <ul className="brand">
      {brands.map((brand) => (
        <li key={brand}>
          <Link
            className="nav-item"
            to={`/${brand.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={() => {
              onItemClick();
              onClose();
            }}
          >
            {brand}
          </Link>
        </li>
      ))}
    </ul>
  );
}
