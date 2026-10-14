import React, { useEffect, useRef, useState } from 'react';

// Fades/slides its children in the first time they scroll into view.
// variant: 'up' | 'left' | 'right' | 'zoom'; delay in ms for staggering siblings.
const Reveal = ({ as: Tag = 'div', variant = 'up', delay = 0, className = '', children, ...props }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
