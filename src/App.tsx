function App() {
  return (
    <div className="max-w-[1600px] max-h-[4642px]">
      <header className="flex justify-between mt-[57px] items-center container mx-auto">
        <img
          className="w-[106px] h-[54px] object-contain"
          src="png/Britlex.png"
        />
        <nav>
          <ul className="flex justify-center gap-4">
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
          </ul>
        </nav>

        <button className="">Let's Talk</button>
      </header>
    </div>
  );
}

export default App;
