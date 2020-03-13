import React from "react";

export default props => {
  if (props.succes) {
    return (
      <div data-test="congrats-component">
        <span data-test="congrats-message">
          Congratualtions! You guessed the word!
        </span>
      </div>
    );
  }
  return <div data-test="component-congrats" />;
};
