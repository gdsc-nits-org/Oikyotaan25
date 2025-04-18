'use client';
import { motion } from 'framer-motion';

interface CurtainProps {
   className?: string;
   title?: string;
}

export default function CurtainReveal({ className, title }: CurtainProps) {
  return (
    <div className={className}>

      {/* Revealed Content (hidden at first) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center font-aprillia md:text-5xl tracking-wide text-2xl z-20 text-[#7D2E2E] "  // Added z-20 to ensure the title is above
      >
        {title}
      </motion.div>

      {/* Top Half of Curtain */}
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "-33%" }}  // Adjusted y value to move just enough for the title to be visible
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="h-1/2 overflow-hidden z-10"
      >
        <img
          src="/assets/landing/rakshabhandan-above.png"
          alt="Top Half"
          className="w-full h-full object-contain object-top"
        />
      </motion.div>

      {/* Bottom Half of Curtain */}
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "33%" }}  // Adjusted y value to move just enough for the title to be visible
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="h-1/2 overflow-hidden z-10"
      >
        <img
          src="/assets/landing/rakshabhandan-below.png"
          alt="Bottom Half"
          className="w-full h-full object-contain object-bottom"
        />
      </motion.div>

    </div>
  );
}
