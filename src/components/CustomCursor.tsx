import { useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName.toLowerCase() === "a" ||
          target.tagName.toLowerCase() === "button" ||
          target.closest("a") !== null ||
          target.closest("button") !== null ||
          target.classList.contains("name-hover-effect") ||
          target.closest(".name-hover-effect") !== null
      );
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [cursorX, cursorY]);

  return (
    <div
      className="hidden md:block pointer-events-none fixed inset-0 z-[9999] mix-blend-difference"
      aria-hidden
    >
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none origin-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0.45 : 1,
        }}
        transition={{ scale: { type: "tween", duration: 0.15 } }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-white pointer-events-none origin-center rounded-sm"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 45 : 0,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{
          scale: { type: "tween", duration: 0.15 },
          rotate: { type: "tween", duration: 0.15 },
          backgroundColor: { type: "tween", duration: 0.15 },
        }}
      />
    </div>
  );
}
