import './Button.css';
const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // primary | secondary | danger
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn--${variant} ${className}`.trim()}
    >
      {children}
    </button>
  );
};
export default Button;