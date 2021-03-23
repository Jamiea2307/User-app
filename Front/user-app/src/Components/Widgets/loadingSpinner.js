import SpinnerContainer from "../../Styles/loadingSpinnerStyles";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <div className="lds-dual-ring" />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
