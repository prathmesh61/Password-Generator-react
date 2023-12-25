import { useCallback, useEffect, useState } from "react";

const Layout = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState<number>(8);
  const [checkNumber, setCheckNumber] = useState<boolean>(false);

  const handleCreatepassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (checkNumber) str += "1234567890";
    for (let i = 0; i <= length; i++) {
      let generatePass = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(generatePass);
    }
    setPassword(pass);
  }, [setPassword, length, checkNumber]);

  useEffect(() => {
    handleCreatepassword();
  }, [checkNumber, length]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center ">
        <input
          type="text"
          className="bg-transparent border border-black rounded-l-md w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded-r-md text-sm">
          Generate
        </button>
      </div>
      <div className="flex items-center gap-2 mt-5">
        <label>Length: {length}</label>
        <input
          type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Numbers: </label>
        <input
          type="checkbox"
          defaultChecked={checkNumber}
          onChange={() => setCheckNumber((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default Layout;
