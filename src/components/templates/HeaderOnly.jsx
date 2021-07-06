import { Header } from "../atoms/layout/Header";

export const HeaderOnry = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
