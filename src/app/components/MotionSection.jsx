export default function MotionSection({ children, className = "", direction = "up" }) {
  const variants = {
    up: { y: 80, x: 0 },
    left: { x: -80, y: 0 },
    right: { x: 80, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0, ...variants[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-120px" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
