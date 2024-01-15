import { Link } from "react-router-dom";

const Button = ({ children, disabled, to }) => {
  const className =
    "bg-[#ff8787] text-white text-sm py-3 px-4 hover:bg-[#ffa8a8] rounded-full transition-colors duration-300 focus:outline-none focus:ring focus:ring-[#ff8787] focus:ring-offset-2 disabled:cursor-not-allowed";

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
