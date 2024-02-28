// List.js

import React, { useState } from 'react';

const List = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const playVideo = (video) => {
    setCurrentlyPlaying(video);
  };

  const stopVideo = () => {
    setCurrentlyPlaying(null);
  };

  const videos = [
    { id: 1, name: 'Video 1', url: 'video1.mp4' },
    { id: 2, name: 'Video 2', url: 'video2.mp4' },
    { id: 3, name: 'Video 3', url: 'video3.mp4' },
    // Add more video objects as needed
  ];

  return (
    <div>
      <h2>List of Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            {video.name}
            <button onClick={() => playVideo(video)}>Play</button>
          </li>
        ))}
      </ul>
      {currentlyPlaying && (
        <div>
          <h3>Now Playing: {currentlyPlaying.name}</h3>
          <video controls autoPlay>
            <source src={currentlyPlaying.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={stopVideo}>Stop</button>
        </div>
      )}
    </div>
  );
};

export default List;
