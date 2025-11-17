import heroImg from "@/public/Images/frame.png"



interface IProps {
    children: React.ReactNode
}
const Hero = ({ children }: IProps) => {
    return (
        <div style={{
            backgroundImage: `url(${heroImg.src})`,
            backgroundPosition: 'center center',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }} className="w-full h-[400px] bg-black flex justify-center items-center">
            {children}
        </div>
    )
};

export default Hero;