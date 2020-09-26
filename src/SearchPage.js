import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://avatars2.githubusercontent.com/u/62207750?s=460&u=befd897845ad63e550919094f1303a3d72e4428d&v=4"
        channel="Clever Programmer"
        verified
        subs="259k"
        noOfVideos={382}
        description="You can find awesome programming videos from this channel!"
      />

      <hr />

      <VideoRow
        views="1.4m"
        subs="659k"
        description="Free training video on React and Material-UI"
        timestamp="3 days ago"
        channel="Clever Programmer"
        title="Let us build a YouTube Clone with REACT JS"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg"
      />

      <VideoRow
        views="700k"
        subs="659k"
        description="Join the 3-part epic masterclass that shows PYTHON"
        timestamp="4 days ago"
        channel="Clever Programmer"
        title="PYTHON Tutorial for Beginners"
        image="https://i.ytimg.com/vi/4F2m91eKmts/hqdefault.jpg"
      />

      <VideoRow
        views="1.2M"
        subs="659k"
        description="Sonny and Qazi live for Javascript tutorial for beginners"
        timestamp="2 months ago"
        channel="Clever Programmer"
        title="Javascript Tutorial for Beginners"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg"
      />

      <VideoRow
        views="2.2M"
        subs="659k"
        description="Here is the best tutorial for Javascript tutorial for beginners"
        timestamp="3 months ago"
        channel="Clever Programmer - full course"
        title="Javascript Tutorial for Beginners"
        image="https://i.ytimg.com/vi/KB7JEnfc7Dc/hqdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
