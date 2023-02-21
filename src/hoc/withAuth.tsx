import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent: any) => (props: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return navigate("/todo", { replace: true });
    }
    return navigate("/signin", { replace: true });
  }, [navigate]);

  return <WrappedComponent {...props} />;
};

export default withAuth;
