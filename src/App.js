import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import './App.css';

function App() {
  const playerRef = useRef();
  const videos = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  ];

  const [index, setIndex] = useState(0);

  const handleChangeVideo = () => {
    setIndex(index === videos.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="App">
      <ReactPlayer
        className="videoPlayer"
        ref={playerRef}
        url={videos[index]}
        playing={true}
        width="100%"
      />
      <div className="videoLink">
        Video link: <a href={videos[index]} target="_blank" rel="noreferrer">{videos[index]}</a>
      </div>
      <div className="butChange" onClick={handleChangeVideo}>
        Change video
      </div>
    </div>
  );
}

export default App;
