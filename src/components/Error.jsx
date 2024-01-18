import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="py-4 px-3 flex flex-col items-center justify-center sm:py-10">
      <h1>Something went wrong 😢</h1>
      <p className="font-semibold text-red-500 my-4">
        {error.data || error.message}
      </p>

      <LinkButton to="-1">&larr; Go back</LinkButton>

      {/* <button onClick={() => navigate(-1)}>&larr; Go back</button> */}
    </div>
  );
}

export default Error;
