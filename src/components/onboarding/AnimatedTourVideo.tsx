
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTourVideoProps {
  videoUrl: string;
  title: string;
  description: string;
}

export const AnimatedTourVideo: React.FC<AnimatedTourVideoProps> = ({
  videoUrl,
  title,
  description
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
};
