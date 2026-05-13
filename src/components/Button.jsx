const Button = ({
  name,
  isBeam = false,
  containerClass = '',
  href,
  download,
  onClick,
  type = 'button',
  ...rest
}) => {
  const className = `btn no-underline ${containerClass}`.trim();

  const content = (
    <>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </>
  );

  if (href) {
    return (
      <a href={href} download={download || undefined} className={className} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} {...rest}>
      {content}
    </button>
  );
};

export default Button;
