import { FiMail, FiBell } from "react-icons/fi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth as firebaseAuth } from "../../auth/firebase";
import { app } from "../../auth/firebase";
import { login, logout } from "../../auth/auth";

const Header = () => {
  const [user] = useAuthState(firebaseAuth);
  const userName = user?.displayName ?? "";
  const renderLoginLogoutBtn = () => {
    if (user) {
      return <button onClick={logout}>Logout</button>;
    }
    return <button onClick={login}>Login</button>;
  };

  return (
    <div className="h-16 grow">
      <div className="w-full pr-6  h-full flex justify-end items-center">
        <div className="flex justify-end items-center border-r">
          <FiMail size={20} className="mr-5" />
          <FiBell size={20} className="mr-5" />
        </div>
        <div className="mx-5">{userName}</div>
        {renderLoginLogoutBtn()}
      </div>
    </div>
  );
};

export default Header;
