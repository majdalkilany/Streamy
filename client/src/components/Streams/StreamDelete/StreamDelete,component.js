/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect, Connect } from "react-redux";

import { fetchStream } from "../../../actions";
import { deleteStream } from "../../../actions";
import Modal from "../../modal.component";
import history from "../../../history";
import { Link } from "react-router-dom";

const StreamDelete = (props) => {
  useEffect(() => {
    //
    props.fetchStream(props.match.params.id);
  }, []);

  const deleteStreamButton = () => {
    props.deleteStream(props.match.params.id);
  };
  const actions = (
    <>
      <button className="ui button negative " onClick={deleteStreamButton}>
        Delete
      </button>
      <Link to="/" className="ui button  ">
        Cancel
      </Link>
    </>
  );

  const renderContent = () => {
    if (!props.stream) {
      return "Are you sure you want to delete the Stream ";
    } else {
      return `Are you sure you want to delete the Stream with title : ${props.stream.title}`;
    }
  };

  return (
    <Modal
      title="Delete Stream"
      description={renderContent()}
      actions={actions}
      onDismiss={() => {
        history.push("/");
      }}
    />
  );
};

const constMapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(constMapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
