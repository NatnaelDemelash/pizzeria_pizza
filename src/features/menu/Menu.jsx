import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();

  return (
    <div>
      <ul>
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

// instante data fetching function which will be called when the menu is page loaded
export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
