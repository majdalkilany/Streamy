/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../../actions";

const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderAdmin = (stream) => {
    console.log(stream.userId, props.currentUserId);
    if (stream.userId === props.currentUserId) {
      return (
        <div className=" right floated content ">
          <Link
            to={`/streams/edit/${stream.id}`}
            className="ui button primary "
          >
            Edit{" "}
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative "
          >
            Delete
          </Link>
        </div>
      );
    }
  };
  const renderList = () => {
    return props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <div>{renderAdmin(stream)}</div>
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
            <div className="description"> {stream.description}</div>
          </div>
        </div>
      );
    });
  };

  const renderCreate = () => {
    if (props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  return (
    <div>
      <h2> Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      {renderCreate()}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
