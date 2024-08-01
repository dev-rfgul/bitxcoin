import ShinyButton from "@/components/magicui/shiny-button";
import { useSelector } from "react-redux";

export function Button({ btnText }) {
  const msg = useSelector((state) => state.countdown.msg);

  console.log("console from Button:", msg);

  return (
    <div>
      {msg === "Release Token" ? (
        <ShinyButton text={btnText} className="bg-blue-500" />
      ) : (<ShinyButton text={btnText} className="bg-blue-300" />)}
    </div>
  );
}

export default Button;
