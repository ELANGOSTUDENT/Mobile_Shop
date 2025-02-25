
import Login from "./Login"; // Import your existing login component

const LoginPageWrapper = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-700 to-indigo-900">
      <div className="relative w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg">
        <Login />
      </div>
    </div>
  );
};

export default LoginPageWrapper;