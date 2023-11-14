import SignIn from "./SignIn";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 lg:flex-row lg:justify-evenly">
      <div className="flex flex-col gap-2 text-center lg:gap-4">
        <h1 className="font-bold text-2xl lg:text-3xl">KINGS LEAGUE</h1>
        <p className="text-base lg:text-lg">
          Be a part of the Ball & Life family. <br /> A catalyst for positive
          change through <br />
          the game you love.
        </p>
      </div>
      <div className="lg:border-2 lg:px-4 lg:py-4">
        <SignIn />
      </div>
    </div>
  );
};

export default Index;
