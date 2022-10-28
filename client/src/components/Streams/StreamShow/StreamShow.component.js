/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../../actions";

const StreamShow = (props) => {
  const { id } = props.match.params;
  useEffect(() => {
    props.fetchStream(id);
  }, []);

  const { title, description } = props.stream;
  const renderDetails = () => {
    if (!props.stream) {
      return <div>Loading ....</div>;
    }
    return (
      <div>
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
