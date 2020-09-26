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
          image="./video1.jpg"
        />
        <VideoCard
          title="JavaScript Tutorial"
          views="2m"
          timestamp="4 days ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="./video2.jpg"
        />
        <VideoCard
          title="Back to Basics"
          views="1.7m"
          timestamp="6 days ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="./video3.jpg"
        />
        <VideoCard
          title="Python for Beginners"
          views="3m"
          timestamp="1 week ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="./video4.jpg"
        />
        <VideoCard
          title="REACT Coaching Call"
          views="2m"
          timestamp="2 weeks ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="./video5.jpg"
        />
        <VideoCard
          title="Instagram Clone"
          views="1.3m"
          timestamp="3 weeks ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="./video6.jpg"
        />
        <VideoCard
          title="Javascript Full Course"
          views="2.5m"
          timestamp="1 month ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="./video7.jpg"
        />
        <VideoCard
          title="Become a REACT Developer"
          views="1.7m"
          timestamp="3 months ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="./video8.jpg"
        />
        <VideoCard
          title="Google and Microsoft Resume"
          views="2.5m"
          timestamp="6 months ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="./video9.jpg"
        />
        <VideoCard
          title="$100K/yr Roadmap"
          views="1.8m"
          timestamp="1 year ago"
          channelImage="./nature1.jpg"
          channel="dixv Chann"
          image="./video10.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
