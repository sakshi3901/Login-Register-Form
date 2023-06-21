import { useContext, useState } from "react";
import { UserContext } from "../userContext";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function IndexPage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  async function logout() {
    await axios.post("/logout");
    setRedirect("/login");
    setUser(null);
  }
  if (!ready) {
    return "Loading.........";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div className="items-center justify-around flex grow mb-64">
      <div className="text-center mx-auto max-w-lg">
        Logged in as a {user.name} ({user.email}) <br />
        <button onClick={logout} className="primary max-w-sm mt-2">
          Logout
        </button>
      </div>
    </div>
  );
}
