// src/components/VideoBackground.jsx
import React from 'react';

const VideoBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <video
        className="min-w-full min-h-full absolute object-cover"
        // आप इस लिंक को अपनी टीम के वीडियो से बदल सकते हैं
        src="/bg.mp4" 
        autoPlay
        loop
        muted
        playsInline // मोबाइल डिवाइस पर बेहतर प्लेबैक के लिए
      />
      {/* वीडियो को गहरा करने के लिए ओवरले */}
      <div className="absolute top-0 left-0 w-full h-full bg-super-king-black bg-opacity-80"></div> 
    </div>
  );
};

export default VideoBackground;