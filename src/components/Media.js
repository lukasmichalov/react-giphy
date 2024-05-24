import React, { useEffect } from "react";
import "./Media.css";
import { fetchTrendingGiphys } from "../api/giphyApi";

const Media = () => {

  const [trending, setTrending] = React.useState([]);
  const [artists, setArtists] = React.useState([]);
  const [clips, setClips] = React.useState([]);
  const [stories, setStories] = React.useState([]);

  useEffect(() => {
    getTrendingGiphys('trending');
  }, []);

  const randomData = (content) => {
    return content.data.sort(() => Math.random() - 0.5);
  }

  const getTrendingGiphys = async (cat) => {
    const treanding = await fetchTrendingGiphys("trending");
    setTrending(randomData(treanding.data));
    const artists = await fetchTrendingGiphys("artists");
    setArtists(randomData(artists.data));
    const stories = await fetchTrendingGiphys("stories");
    setStories(randomData(stories.data));
    const clips = await fetchTrendingGiphys("clips");
    setClips(randomData(clips.data));
  }

  console.log(trending);

  return (
    <div className="media">
      <div className="row">
        <div className="row-header">
          <img alt="icon" src="/images/trending.svg"></img>
          <h1>Trending</h1>
        </div>
        <div className="row-content">
          {trending.map((gif, index) => (
            <img key={index} src={gif.images.downsized.url} alt="gif"></img>
          ))}
          </div>
      </div>

      <div className="row">
        <div className="row-header">
          <img alt="icon" src="/images/artists.svg"></img>
          <h1>Artisan</h1>
        </div>
        <div className="row-content">
          {artists.map((gif, index) => (
            <img key={index} src={gif.images.downsized.url} alt="gif"></img>
          ))}
          </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img alt="icon" src="/images/clips.svg"></img>
          <h1>Clips</h1>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img alt="icon" src="/images/stories.svg"></img>
          <h1>Stories</h1>
        </div>
        <div className="row-content">
          {stories.map((gif, index) => (
            <img key={index} src={gif.images.downsized.url} alt="gif"></img>
          ))}
          </div>
      </div>
    </div>
  );
};

//time 53:15

export default Media;
