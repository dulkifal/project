import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../lib/firebase"; // Make sure you have this firebase config file

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    // if (token) {
    //   router.push("/admin");
    // }
  }, [router]);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Get the Google access token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info
      const user = result.user;

      // Store the token
      localStorage.setItem("token", await user.getIdToken());
      router.push("/admin");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          تسجيل الدخول
        </h2>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <img src="/google-icon.svg" alt="Google" className="w-6 h-6" />
          <span>تسجيل الدخول باستخدام جوجل</span>
        </button>

        {error && (
          <p className="text-red-500 text-center mt-2">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
