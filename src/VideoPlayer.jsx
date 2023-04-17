import React, { useRef, useState } from "react";

export default function VideoPlayer(props) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayPause() {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
      <video ref={videoRef} src={props.videoSrc} onEnded={() => setIsPlaying(false)} />
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}
