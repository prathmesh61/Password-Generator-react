import Layout from "./components/Layout";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-y-5">
      <h1 className="font-bold text-xl text-clip font-mono">
        Password Generator Optimize App
      </h1>
      <Layout />
    </div>
  );
};

export default App;
