function Input(props:any) {
    return (
      <>
        <button {...props}> {props.text} </button>
      </>
    );
  }
  
  export default Input;
  