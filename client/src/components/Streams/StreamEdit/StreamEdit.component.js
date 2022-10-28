/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../../actions";
import StreamForm from "../StreamForm/StreamForm.component";

const StreamEdit = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const renderDetails = () => {
    if (!props.stream) {
      return <div>loading...</div>;
    }
    const onSubmit = (formValue) => {
      props.editStream(props.match.params.id, formValue);
    };

    return (
      <div>
        <StreamForm
          onSubmit={onSubmit}
          initialValues={_.pick(props.stream, "title", "description")}
        />
      </div>
    );
  };
  return renderDetails();
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
