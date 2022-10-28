/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import flvjs from "flv.js";
import { fetchStream } from "../../../actions";

const StreamShow = (props) => {
  const videoRef = useRef();
  const { id } = props.match.params;
  useEffect(() => {
    buildPlayer();
    // let player = buildPlayer();

    props.fetchStream(id);

    // return () => {
    //   player.destroy();
    // };
  }, []);
  let flvPlayer;
  const buildPlayer = () => {
    if (flvPlayer || !props.stream) {
      return;
    }
    flvPlayer = flvjs.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    flvPlayer.attachMediaElement(videoRef.current);
    flvPlayer.load();
    flvPlayer.play();

    return flvPlayer;
  };

  const renderDetails = () => {
    if (!props.stream) {
      return <div>Loading ....</div>;
    }
    const { title, description } = props.stream;
    return (
      <div>
        <video ref={videoRef} style={{ width: "100%" }} controls />
        <h2> {title}</h2>
        <h5> {description}</h5>
      </div>
    );
  };
  return renderDetails();
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
