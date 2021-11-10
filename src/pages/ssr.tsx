import { GetServerSideProps } from "next";
import React, { FC } from "react";

const Test: FC<{ data: Object }> = ({ data }) => {
  return (
    <pre>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/hello");
  const json = await response.json();
  return { props: { data: json } };
};

export default Test;
