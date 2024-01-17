import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, onClick }) => {
  const base =
    "inline-block bg-[#ff8787] uppercase p-2 text-white text-sm hover:bg-[#ffa8a8] rounded-full transition-colors duration-300 focus:outline-none focus:ring focus:ring-[#ff8787] focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + "py-3 px-4 md:py-4 md:px-8",
    small: base + "py-2 px-4 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block text-sm text-stone-600 border border-stone-400 hover:text-stone-800  hover:bg-stone-300 rounded-full transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-6 md:py-3.5 md:px-8",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
