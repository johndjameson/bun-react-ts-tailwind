import "@/index.css";

import logo from "@/images/logo.svg";
import reactLogo from "@/images/react.svg";

export const App = () => {
  return (
    <div className="mt-8 grid justify-center gap-y-4">
      <div className="flex justify-center gap-8">
        <img alt="Bun Logo" className="size-24" src={logo} />
        <img alt="React Logo" className="size-24" src={reactLogo} />
      </div>

      <h1 className="text-5xl leading-tight font-bold">Bun + React</h1>
    </div>
  );
};
