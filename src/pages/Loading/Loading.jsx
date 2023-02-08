import React from "react";
import withAuth from "../../hoc/withAuth";

const Loading = () => {
  return <div>loading...</div>;
};

export default withAuth(Loading);
