import Link from "next/link";

const HomeContent = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-blue-600 to-blue-300 text-white">
      <header className="w-full p-5 bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-blue-600">Redpluto</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-800 hover:text-blue-600 transition duration-300"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-gray-800 hover:text-blue-600 transition duration-300"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center p-5">
        <h2 className="text-5xl font-extrabold mb-6">Welcome to My Project!</h2>
        <p className="text-lg mb-8 max-w-md">
          Discover a modern solution for managing your tasks effectively. Our
          platform provides tools designed to enhance productivity and
          collaboration.
        </p>
        <Link href="/login">
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </Link>
      </main>
    </div>
  );
};

export default HomeContent;
