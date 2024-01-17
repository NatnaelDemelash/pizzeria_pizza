import { Link } from "react-router-dom";
import LinkButton from "../../components/LinkButton";
import Button from "../../components/Button";
import CartItem from "../../features/cart/CartItem";
import { useSelector } from "react-redux";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  // const cart = fakeCart;
  const cart = useSelector((state) => state.cart.cart);
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="my-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="divide-y-2 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2 space-y-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        {/* <Link to="/order/new">Order pizzas</Link> */}
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
