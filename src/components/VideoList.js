import react from 'react';
import VideoItem from './VideoItem';

const VideoList =(props)=>{
    const renderedList=props.videos.map((video)=>{
       return <VideoItem onVideoSubmit={props.onVideoSubmit} video={video}/>
    })
    return <div className="ui divided relaxed list">{renderedList}</div>
}

export default VideoList;