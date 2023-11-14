import Link from "next/link";

const SignIn = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-4 border-b-2 py-5">
        <form action="create" className="flex flex-col gap-3">
          <input
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border rounded-lg px-4 py-2"
          />
          <input
            name="password"
            id="password"
            placeholder="Enter your password"
            className="border rounded-lg px-4 py-2"
          />
          <Link
            href={"/register"}
            className="bg-[#2A6041] text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-7 xl:py-2.5 xl:text-base flex items-center justify-center"
          >
            Log in
          </Link>
        </form>
        <Link href={"/"} className="text-center">
          Forgot password?
        </Link>
      </div>
      <Link
        href={"/register"}
        className="bg-[#1CA0E9] mt-4 text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-7 xl:py-2.5 xl:text-base flex items-center justify-center"
      >
        Create account
      </Link>
    </div>
  );
};

export default SignIn;
