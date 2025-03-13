import Header from "../components/header";

const withHeader = (WrappedComponent: any) => {
  return (props: any) => (
    <>
      <Header />
      <WrappedComponent {...props} />
    </>
  );
};

export default withHeader;
