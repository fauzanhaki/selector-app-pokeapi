const Header = () => {
  return (
    <>
      <header className="border-b border-gray-200 bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 sm:text-3xl">
                Berry Selector
              </h1>

              <p className="mt-1.5 text-sm lg:text-xl text-gray-500">
                Berry Selector is a web app that lets users select various
                berries from the Pokémon API and displays their chosen
                selection.
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
