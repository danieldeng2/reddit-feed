import Alert from "react-bootstrap/Alert";

function ErrorAlert(props) {
  return (
    props.show && (
      <Alert key={1} variant={"danger"}>
        {props.message}
      </Alert>
    )
  );
}

export default ErrorAlert;
