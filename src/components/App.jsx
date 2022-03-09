import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videoList: exampleVideoData,
      video: exampleVideoData[0]
    };
    this.onVideoClick = this.onVideoClick.bind(this);
  }
  onSearchClick(event) {

  }

  onVideoClick(event, video) {
    this.setState({
      video: video
    });

    /*
    setState(data, string, xhr) {
    videoList: data;
}
    */
  }
  componentDidMount() {
    // // console.log()
    searchYouTube('cute cat video', (data) => {
      this.setState({
        videoList: data,
        video: data[0]
      });
    });
  }
  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.video} />
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.state.videoList} onVideoClick={this.onVideoClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
