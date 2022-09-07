import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { auth } from "./auth/firebase";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import { Login } from "./components/login";
import Sidebar from "./components/sidebar/index";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading.......</div>;
  }
  if (!loading && !user) {
    return <Login></Login>;
  }

  if (!loading && user) {
    return (
      <div className="h-screen overflow-hidden flex">
        <Sidebar />
        <div className="grow">
          <Header />
          <Dashboard />
        </div>
      </div>
    );
  }

  return <></>;
}

export default App;
