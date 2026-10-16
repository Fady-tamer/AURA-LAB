const Button = ({ text, onClickFn }) => {
  return (
    <button
      onClick={onClickFn}
      className="px-8 py-5 text-[13px] text-white bg-text-primary cursor-pointer"
    >
      {text}
    </button>
  );
};

export default Button;
