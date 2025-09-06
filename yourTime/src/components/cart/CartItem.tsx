interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity?: number;
    img: string;
  };
  remove: (id: string) => void;
}

const formatPriceMKD = (price: number) => price.toFixed(3).replace(".", ",");

export default function CartItem({ item, remove }: CartItemProps) {
  return (
    <li className="cart-item">
      <img src={item.img} alt={item.name} className="cart-item-img" />
      <span>
        {item.name} - {formatPriceMKD(item.price)} МКД x {item.quantity || 1}
      </span>
      <button onClick={() => remove(item.id)}>Remove</button>
    </li>
  );
}
