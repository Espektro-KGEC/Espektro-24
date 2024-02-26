import Lottie from "lottie-react";
import ComingSoonAnimation from "../../../design/coming-soon-lottie.json";

const ComingSoon = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Lottie
        animationData={ComingSoonAnimation}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "300px",
          maxHeight: "300px",
        }}
      />
    </div>
  );
};

export default ComingSoon;
