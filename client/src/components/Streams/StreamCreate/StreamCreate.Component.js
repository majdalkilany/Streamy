import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../../actions";
import StreamForm from "../StreamForm/StreamForm.component";

const StreamCreate = (props) => {
  const onSubmit = (formValues) => {
    props.createStream(formValues);
  };

  return (
    <div>
      <h3> create Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);
