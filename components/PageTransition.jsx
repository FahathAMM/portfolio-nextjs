"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence  >
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      />
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
