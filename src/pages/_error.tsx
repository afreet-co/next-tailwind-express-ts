import { NextPageContext } from "next";
import NextError from "next/error";

const Error = ({ statusCode }) => {
  return (
    <NextError statusCode={statusCode}>
      An error 404 occurred on server
    </NextError>
  );
};
Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
