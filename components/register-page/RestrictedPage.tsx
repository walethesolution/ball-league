"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import BackgroundImage from "../../public/assets/images/homeCourt.png";
import Link from "next/link";

const RestrictedPage: React.FC = () => {
  //   const { status } = useSession();
  const router = useRouter();

  //   React.useEffect(() => {
  //     if (status === "unauthenticated") {
  //       router.push("/login");
  //     }
  //   }, [status, router]);

  //   if (status === "loading") {
  //     return (
  //       <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
  //         <p>Loading...</p>
  //       </div>
  //     );
  //   }

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
        <h2 className="text-3xl font-bold text-white mb-6">
          Access Restricted
        </h2>
        <p className="text-lg text-white mb-8">
          You need to be a member to access this page. Please sign in to
          continue.
        </p>
        <Link
          href={"/login"}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default RestrictedPage;
