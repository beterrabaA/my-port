import grainImage from "@/assets/images/grain.jpg";

const GrainBackground = () => {
  return (
    <div
      className="absolute inset-0 -z-10 opacity-5"
      style={{
        backgroundImage: `url(${grainImage.src})`,
      }}
    />
  );
};

export default GrainBackground;
