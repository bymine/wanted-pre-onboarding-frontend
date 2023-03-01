import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks";

const withAuth =
  <P extends object>(WrappedComponent: React.ComponentType) =>
  (props: P) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
      state: { token },
    } = useAuth();

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
