'use client';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const handleGoogleLogin = () => {
    alert("Logged in with Google (dummy)");
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign in to BuyHaven</h2>

        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded mb-4"
        >
          Sign in with Google
        </button>

        <p className="text-gray-500 text-sm text-center">
          This is a dummy login. No actual authentication happens.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
