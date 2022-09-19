import Button from "../../common/Button";

function AddButton(props: any) {
  return (
    <>
      <Button {...props} className="btn-primary text-white font-md"  text="ADD"/>
    </>
  );
}

export default AddButton;
