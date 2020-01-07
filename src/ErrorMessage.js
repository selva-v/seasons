import React from 'react';

const ErrorMessage = (props) => {
  return (
    <div className="error-message">
      <div className="text-center ui error message">
        <i className="huge map marker alternate icon"></i>
        <h1>Oops! {props.error}</h1>
      </div>
    </div>
  );
}

export default ErrorMessage;