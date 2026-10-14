import React from 'react';

const variants = {
  primary: 'bg-rose text-cream hover:bg-rose-dark',
  outline: 'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream',
  light: 'border border-cream/30 text-cream hover:bg-cream hover:text-ink',
};

// Renders an <a> when given href, otherwise a <button>
const Button = ({ href, variant = 'primary', className = '', children, ...props }) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium
    tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2
    focus-visible:outline-offset-2 focus-visible:outline-rose ${variants[variant]} ${className}`;

  return href ? (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  ) : (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
