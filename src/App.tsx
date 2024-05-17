function App() {
  return (
    <div className="max-w-[1600px] max-h-[4642px] Poppins">
      <header className="flex justify-between mt-[57px] items-center container mx-auto">
        <img
          className="w-[106px] h-[54px] object-contain"
          src="img/Britlex.png"
        />
        <nav>
          <ul className="flex justify-center gap-6 font-medium">
            <li>
              <a href="">Home</a>
            </li>

            <li>
              <a href="">Skillls</a>
            </li>

            <li>
              <a href="">About us</a>
            </li>

            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
        </nav>

        <button className="border-black rounded-lg border-2 p-3 pl-8 pr-8">
          Let's Talk
        </button>
      </header>
      <body className="mt-[115px]">
        <div className="flex justify-between container mx-auto">
          <div className="flex items-center container">
            <p className="font-semibold text-[64px] line-clamp-3">
              Learn
              <br /> Any Foreign
              <br /> Language
            </p>
            <img
              src="png/light-bulb-svgrepo-com 1.svg"
              className="w-[70px] h-[85px]"
            />
          </div>
          <p className="m-4 text-[#8F95A5] text-left">
            With our teachers who write a program for each student, you will be
            able to make your first sketch after the first lesson.
          </p>
          <button className=" text-white bg-[#263238] text-[36px] border-[#263238] rounded-lg border-8 pl-5 pr-5">
            Get started
          </button>
        </div>
        <div>
          <img
            src="img/Learning languages-bro 1.svg"
            className="w-[661px] h-[661px] object-contain"
          />
        </div>

        <h1>Skills</h1>

        <div>
          <img src="img/Shared goals-bro 1.svg" />
        </div>
      </body>
    </div>
  );
}

export default App;
