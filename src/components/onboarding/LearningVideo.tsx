
import React from 'react';

interface LearningVideoProps {
  videoId: string;
  title: string;
}

export const LearningVideo: React.FC<LearningVideoProps> = ({ videoId, title }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="relative w-full aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};
