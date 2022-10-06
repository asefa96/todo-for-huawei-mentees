import Button from "../../common/Button";

function DeleteButton(props: any) {
  return (
    <>
      <Button {...props} className="btn-error text-white" text="DELETE" />
    </>
  );
}

export default DeleteButton;
