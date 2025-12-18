interface IProps {
  children: React.ReactNode;
  img: string;
}
const Hero = ({ children, img }: IProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full h-[400px] bg-black flex justify-center items-center"
    >
      {children}
    </div>
  );
};

export default Hero;
