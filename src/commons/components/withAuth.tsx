import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/contexts/authContext";

const withAuth = (WrappedComponent: any) => (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    state: { token },
  } = useContext(AuthContext);

  useEffect(() => {
    if (token !== "") {
      navigate("/todo", { replace: true });
    } else {
      if (location.pathname === "/signup") {
        navigate("/signup", { replace: true });
      } else {
        navigate("/signin", { replace: true });
      }
    }
  }, [token]);

  return <WrappedComponent {...props} />;
};

export default withAuth;
