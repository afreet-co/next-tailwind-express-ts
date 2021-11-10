import React, { useEffect, useState } from "react";

const CSR = () => {
  const [state, setState] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/hello");
      const json = await response.json();
      setState(json);
    };
    fetchData();
  }, []);

  return (
    <pre>
      <code>{JSON.stringify(state, null, 2)}</code>
    </pre>
  );
};

export default CSR;
