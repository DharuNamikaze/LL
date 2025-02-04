import React, { useEffect, useRef, ReactElement } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: ReactElement; // Expecting a single React child element
}

export default function MagneticButton({ children }: MagneticButtonProps) {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure children is a valid React element before cloning
    if (!React.isValidElement(children)) {
      console.error(
        "MagneticButton expects a single valid React element as children."
      );
      return;
    }

    // Capture current ref value in a local variable
    const magneticElement = magnetic.current;

    // GSAP animations for magnetic effect
    const xTo = gsap.quickTo(magneticElement, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magneticElement, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (magneticElement) {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          magneticElement.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    if (magneticElement) {
      magneticElement.addEventListener("mousemove", handleMouseMove);
      magneticElement.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup listeners on component unmount
    return () => {
      if (magneticElement) {
        magneticElement.removeEventListener("mousemove", handleMouseMove);
        magneticElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [children]);

  // Use cloneElement to pass the ref down to the child
  return React.cloneElement(children, { ref: magnetic });
}
