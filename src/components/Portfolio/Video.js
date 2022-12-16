import React from 'react';
import ReactPlayer from 'react-player'
import './Video.css';

function Video({ url }) {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={url}
        width='100%'
        height='100%'
      />
    </div>
  );
}

export default Video;
