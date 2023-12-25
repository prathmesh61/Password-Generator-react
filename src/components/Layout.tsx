import { useCallback, useState } from "react";

type Props = {};

const Layout = (props: Props) => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState<String | null>("");
  const [checkNumber, setCheckNumber] = useState<Boolean>(false);

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
        <label>Length: </label>
        <input type="range" onChange={(e) => setLength(e.target?.value)} />
        <label>Numbers: </label>
        <input type="checkbox" onChange={(prev) => setCheckNumber(!prev)} />
      </div>
    </div>
  );
};

export default Layout;
