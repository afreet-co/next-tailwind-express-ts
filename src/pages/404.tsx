import NextError from "next/error";

const Error = () => {
  return (
    <NextError statusCode={404}>An error 404 occurred on server</NextError>
  );
};

export default Error;
