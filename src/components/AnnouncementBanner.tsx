import React from 'react';
import { motion } from 'motion/react';

export default function AnnouncementBanner() {
  return (
    <div className="bg-primary-dark text-white py-2 px-4 text-center text-[10px] md:text-xs font-bold tracking-[0.15em] relative z-[60]">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        DELIVERIES DONE WITHIN KAMPALA CITY • CALL US: 0778684463
      </motion.p>
    </div>
  );
}
