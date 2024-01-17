import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="text-center my-10 sm:my-16 px-4">
      <h1 className="font-semibold text-xl mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-[#ff8787]">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue Ordering, {userName}
        </Button>
      )}
    </div>
  );
}

export default Home;
