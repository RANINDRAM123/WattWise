import React from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`glass-card glass-effect ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlowCard;