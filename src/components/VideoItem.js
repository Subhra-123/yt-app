import React from "react";
import VideoList from "./VideoList";
import './VideoItem.css';

const VideoItem =({video,onVideoSubmit})=>{
    return (
        <div onClick={()=>onVideoSubmit(video)} className="videoItem">
            <img className="ui image" src={video.snippet.thumbnails.medium.url}></img>
            <div className="content">

            <div className="header">{video.snippet.title}</div>
            </div>

        </div>


    );
}

export default VideoItem;