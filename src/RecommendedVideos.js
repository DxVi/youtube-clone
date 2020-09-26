import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Become a web developer"
          views="2.3m"
          timestamp="3 days ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="https://i.ytimg.com/vi/_irmrN0WbTw/hqdefault.jpg"
        />
        <VideoCard
          title="Alter Ego"
          views="2m"
          timestamp="4 days ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="https://i.ytimg.com/vi/rD0RPo98S6U/hqdefault.jpg"
        />
        <VideoCard
          title="javascript Tutorial"
          views="1.7m"
          timestamp="6 days ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="https://i.ytimg.com/vi/AzYsLGhfgok/hqdefault.jpg"
        />
        <VideoCard
          title="Back to Basics"
          views="3m"
          timestamp="1 week ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="https://i.ytimg.com/vi/5x3OY0OWWN4/hqdefault.jpg"
        />
        <VideoCard
          title="PYTHON for Beginners"
          views="2m"
          timestamp="2 weeks ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="https://i.ytimg.com/vi/piFSLM4jrkI/hqdefault.jpg"
        />
        <VideoCard
          title="REACT Coaching Call"
          views="1.3m"
          timestamp="3 weeks ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="https://i.ytimg.com/vi/9ba-Nx9oK0w/hqdefault.jpg"
        />
        <VideoCard
          title="Make Money from Home"
          views="2.5m"
          timestamp="1 month ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="https://i.ytimg.com/vi/EUfl31gzjY8/hqdefault.jpg"
        />
        <VideoCard
          title="Dying Programming Languages"
          views="1.7m"
          timestamp="3 months ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="https://i.ytimg.com/vi/ysmkJrgrV1o/hqdefault.jpg"
        />
        <VideoCard
          title="javascript 7 Skills"
          views="2.5m"
          timestamp="6 months ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="https://i.ytimg.com/vi/Pht0qCHsKbA/hqdefault.jpg"
        />
        <VideoCard
          title="Smile Detection in PYTHON"
          views="1.8m"
          timestamp="1 year ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="https://i.ytimg.com/vi/uLY5JSE5WAU/hqdefault.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
