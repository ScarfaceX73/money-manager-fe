import { login } from "../../auth/auth";
export const Login = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <button
        onClick={login}
        className="bg-blue-500 h-12 w-24 rounded-lg shadow-lg text-white"
      >
        Login
      </button>
    </div>
  );
};
