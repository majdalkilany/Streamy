import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const { title, description, actions, onDismiss } = props;
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active " onClick={onDismiss}>
      <div
        className="ui standard modal visible active "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="header"> {title}</div>
        <div className="content  ">{description}</div>
        <div className="actions ">{actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
