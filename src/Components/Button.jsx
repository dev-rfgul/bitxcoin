// import ShinyButton from "@/components/magicui/shiny-button";
// import { useSelector } from "react-redux";

// export function Button({ btnText }) {
//   const msg = useSelector((state) => state.countdown.msg);

//   return (
//     <div>
//       {console.log("console from Button:", msg)}
//       {msg === undefined ? (
//         <ShinyButton disabled={true} text={btnText} className="bg-blue-300" />
//       ) : msg === "Release Token" ? (
//         <ShinyButton text={btnText} className="bg-blue-500" />
//       ) : (
//         <ShinyButton text={btnText} className="bg-blue-100" />
//       )}
//     </div>
//   );
// }

// export default Button;




import ShinyButton from "@/components/magicui/shiny-button";
import { useSelector } from "react-redux";

export function Button({ btnText }) {


  const msg = useSelector((state) => state.countdown.msg);

  // console.log("console from Button:", msg);


  return (
    <div>
      {/* {console.log("console from Button:", msg)} */}
      <ShinyButton  text={btnText} className="bg-blue-500" />
    </div>
  );
}

export default Button;
