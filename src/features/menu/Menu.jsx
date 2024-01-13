import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return <h1>Menu</h1>;
}

// instante data fetching function which will be called when the menu is page loaded
export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
