import { useAuthState } from "react-firebase-hooks/auth";
import { auth as firebaseAuth } from "./firebase";

const useAuth = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);
  const userId = user?.uid ?? "";
  return { user, userId, loading, error };
};

export default useAuth;
