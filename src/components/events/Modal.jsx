import React from "react";

import "./events.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = () => {
    return show ? "modal display-block" : "modal display-none";
  };

  return (
    <div className={showHideClassName()}>
      <section className="modal-main p-4 d-flex flex-column align-items-center justify-content-center">
        {children}

        <button
          className="btn-block btn btn-primary btn-marketing rounded-pill mt-3"
          onClick={handleClose}
        >
          close
        </button>
      </section>
    </div>
  );
};

export default Modal;
