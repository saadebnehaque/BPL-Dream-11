import bannerBG from "../../assets/bg-shadow.png";
import bannerIMG from "../../assets/banner-main.png";

const Banner = ({ coin, setCoin }) => {
    return (
        <div
            className="container mx-auto mt-10 md:mt-28 h-136.25 md:rounded-2xl bg-[#131313] bg-cover bg-center px-2.5 py-16 " style={{ backgroundImage: `url(${bannerBG})` }}
        >
            <div className="flex flex-col items-center gap-6 text-center text-white ">
                <div>
                    <img src={bannerIMG} alt="" />
                </div>
                <div className="space-y-2.5">
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-[40px] font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="md:text-2xl font-medium">Beyond Boundaries Beyond Limits</p>
                    </div>
                    <button
                        onClick={() => setCoin(coin + 500000)}
                        className="px-8 py-4 rounded-2xl bg-[#E7FE29] border-2 border-[#131313] text-[#131313] font-bold hover:bg-[#d8ef22] hover:scale-105 active:scale-100 active:ring-2 active:ring-[#d8ef22] active:ring-offset-2 active:ring-offset-[#131313] transition-all duration-150 ease-in-out">
                        Claim Free Credit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;