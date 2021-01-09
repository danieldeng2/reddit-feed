import Spinner from "react-bootstrap/Spinner";

function LoadingScreen() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Spinner animation="border" role="status" className="m-auto">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoadingScreen;
