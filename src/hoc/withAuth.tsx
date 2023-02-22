import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent: any) => (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/todo", { replace: true });
    } else {
      if (location.pathname === "/signup") {
        navigate("/signup", { replace: true });
      } else {
        navigate("/signin", { replace: true });
      }
    }
  }, [navigate]);

  return <WrappedComponent {...props} />;
};

export default withAuth;
