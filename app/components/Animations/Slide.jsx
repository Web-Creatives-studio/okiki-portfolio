import { motion } from "framer-motion";

export default function Slide({
  children,
  direction = "right",
  delay = 0,
  duration = 0.6,
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case "right":
        return { x: 100, opacity: 0 };
      case "left":
        return { x: -100, opacity: 0 };
      case "bottom":
        return { y: 80, opacity: 0 };
      case "top":
        return { y: -80, opacity: 0 };
      default:
        return { x: 100, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}