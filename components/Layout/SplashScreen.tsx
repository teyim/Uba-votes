function SplashScreen() {
  console.log('showing');
  return (
    <div className="w-screen h-screen bg-gradient-to-tl from-indigo-500 to-violet-600 flex justify-center align-middle content-center absolute z-50">
      <h1 className="font-unbounded font-semibold text-4xl text-orange-300 animate-pulse my-auto">
        Uba-Votes
      </h1>
    </div>
  );
}

export default SplashScreen;
