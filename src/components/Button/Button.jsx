import './Button.scss';

const Button = ({ onClick, text, className = '' }) => {
  return (
    <button className={`Button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
