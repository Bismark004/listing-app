import Image from "next/image";
import { Logos } from "@/constants/index";
const Header = () => {
  return (
    <header className="w-full ">
      <div className="flex justify-center items-center gap-2 bg-[#34967C] h-[92px] md:h-[47px]">
        <Image src="/assets/icons/Case.png" alt="case" width={24} height={24} />
        <p className="text-white">
          Overseas trip? Get the latest information on travel guides
        </p>

        <button className="h-[30px] w-[86px] bg-[#161117] text-[white] rounded-full ">
          More info
        </button>
      </div>

      <div className=" px-8 ">
        {/* mobile */}
        <div className="p-4 border-b border-gray-800 px-4 block md:hidden">
          <h2 className="text-xl font-semibold mb-2">Where to</h2>
          <div className="flex justify-between items-center border-b border-gray-200 pb-4">
            <div className="text-gray-400 text-sm">
              Location • Date • Add guest{" "}
            </div>
            <div className="flex gap-2">
              <button className="bg-amber-400 w-10 h-10 rounded-full flex items-center justify-center">
                <Image
                  src={"/assets/icons/magnifer.png"}
                  alt="magnifier"
                  width={28}
                  height={28}
                />
              </button>
              <button className="bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center">
                <Image
                  src={"/assets/icons/profile 2.png"}
                  alt="people"
                  width={62}
                  height={62}
                />
              </button>
            </div>
          </div>
        </div>

        {/* desktop */}

        <div className="flex items-center justify-between px-4 md:px-8 py-4">
          <div className="flex-shrink-0">
            <a href="#" className="font-bold text-2xl">alx</a>
          </div>

          <div className="hidden md:flex flex-1 mx-8 bg-white rounded-full shadow-md items-center">
            <div className="flex flex-col px-4 border-1 border-gray-300 first:border-0">
              <label className="text-xs text-gray-500">Location</label>
              <input
                type="text"
                placeholder="Search for destination"
                className="text-sm text-gray-700 outline-none bg-transparent"
              />

            </div>

            <div className="flex flex-col px-4 border-1 border-gray-300 first:border-0">
              <label className="text-xs text-gray-500">Check in</label>
              <input
                type="text"
                placeholder="Add dates"
                className="text-sm text-gray-700 outline-none bg-transparent"
              />

            </div>

            <div className="flex flex-col px-4 border-1 border-gray-300 first:border-0">
              <label className="text-xs text-gray-500">Check out</label>
              <input
                type="text"
                placeholder="Add date"
                className="text-sm text-gray-700 outline-none bg-transparent"
              />

            </div>

            <div className="flex flex-col px-4 border-1 border-gray-300 first:border-0">
              <label className="text-xs text-gray-500">People</label>
              <input
                type="text"
                placeholder="Add guest"
                className="text-sm text-gray-700 outline-none bg-transparent"
              />

            </div>




            
            <button className="bg-[#FFB400] p-2 rounded-full ml-2"> 
                <Image
                  src={"/assets/icons/magnifer.png"}
                  alt="magnifier"
                  width={28}
                  height={28}
                />
            </button>
          </div>


          {/* Auth Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#34967C] text-white px-4 py-2 rounded-full">
              Sign in
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-full">
              Sign up
            </button>
          </div>
        </div>



        <div className="flex justify-between items-center px-4 py-6 gap-4 lg:gap-1 overflow-x-auto no-scrollbar whitespace-nowrap snap-x">
          {Logos.map((logo) => (
            <div
              key={logo.id}
              className="flex flex-col items-center gap-1 snap-start"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-400">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;
 