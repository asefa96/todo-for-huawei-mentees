import React from "react";

const Input = React.forwardRef((props: any,ref) => {
  return (
    <>
      <input {...props} ref={ref} />
      {props.validateInput ? (
        <span className="text-red"> This field is required!</span>
      ) : (
        ""
      )}
    </>
  );
});

export default Input;
