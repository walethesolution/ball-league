const RegisterPage = () => {
  return (
    <div className="bg-[#FFFFFA] flex flex-col text-black w-full ">
      <h1 className="text-lg">KINGS LEAGUE</h1>
      <p>
        Be a part of the Ball & Life family. <br /> A catalyst for positive
        change through the game you love.
      </p>
      <div>
        <form className="flex flex-col">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className=""
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your password"
            className=""
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
