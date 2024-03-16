import React from "react";
import PropTypes from "prop-types";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    )
  );
}

Alert.propTypes = {
  alert: PropTypes.object,
};

Alert.defaultProps = {
  alert: {
    msg: "Write alert message here",
    type: "Sample alert type",
  },
};