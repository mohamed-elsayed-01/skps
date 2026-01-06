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
      className="relative w-full h-[400px] bg-black"
    >
      <div className="w-full h-full bg-black/40 absolute top-0 left-0">
      </div>
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default Hero;
