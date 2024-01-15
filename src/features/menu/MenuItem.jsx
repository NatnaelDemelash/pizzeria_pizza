import { formatCurrency } from "../../utils/helpers";
import Button from "../../components/Button";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`${soldOut ? "opacity-70 grayscale" : ""}  h-24`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-stone-600 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="flex justify-between items-center mt-auto text-stone-500 text-sm uppercase">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          <Button>Add to Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
