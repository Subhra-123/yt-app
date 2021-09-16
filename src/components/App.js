import React  from "react";
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail  from "./VideoDetail";


class App extends React.Component{
    state={videos:[] ,selectedVideo:null};
    componentDidMount(){
        this.onFormsubmit('arcade');
    }

    onFormsubmit= async(term)=>{
       const response= await youtube.get('/search',{
            params:{
                q:term
            }
            
        })
        console.log(response);

        this.setState({videos: response.data.items
        , selectedVideo: response.data.items[0]})

    }
    onVideoSubmit=(video)=>{
        this.setState({selectedVideo:video});
    }
    render(){
        return (
        <div className="ui container">
            <SearchBar onSubmit={this.onFormsubmit}/>
            <div className="ui grid">
            <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
            <VideoList onVideoSubmit={this.onVideoSubmit} videos={this.state.videos}/>
            </div>
            </div>
            </div>
            </div>
            );
    }
}

export default App;