import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createStream } from "../../../actions";

const StreamCreate = (props) => {
  const renderErrorMessage = ({ error, touched }) => {
    if (error && touched) {
      return <div className=" ui error message">{error}</div>;
    }
  };

  const renderInput = ({ input, placeholder, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} placeholder={placeholder} />
        {renderErrorMessage(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    console.log(formValues);

    props.createStream(formValues);
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
        <Field
          name="title"
          component={renderInput}
          placeholder="stream title"
          label="Enter Title"
        />
        <Field
          name="description"
          component={renderInput}
          placeholder="stream description"
          label="Enter description"
        />

        <button className="ui button primary">Submit</button>
      </form>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};
  console.log(formValues);
  if (!formValues.title) {
    errors.title = "you should enter title ";
  }
  if (!formValues.description) {
    errors.description = "you should enter description ";
  }
  return errors;
};
const warpedForm = reduxForm({
  form: "StreamCreate", // a unique identifier for this form
  validate,
})(StreamCreate);

export default connect(null, { createStream })(warpedForm);
