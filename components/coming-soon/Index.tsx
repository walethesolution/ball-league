import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "../../public/assets/images/homeCourt.png";

export default function ComingSoon() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
          layout="fill"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-300 mb-8">
          We're working hard to bring you this feature. Stay tuned for updates!
        </p>
        <Link href="/">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
