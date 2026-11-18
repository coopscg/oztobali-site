import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

const MagneticButton = React.forwardRef<HTMLDivElement, MagneticButtonProps & React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, strength = 0.35, ...rest }, forwardedRef) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
    const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current || !window.matchMedia('(pointer: fine)').matches) return;
      const rect = ref.current.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      x.set(relX * strength);
      y.set(relY * strength);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={(node) => {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof forwardedRef === 'function') forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className={`inline-block ${className ?? ''}`}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';

export default MagneticButton;
