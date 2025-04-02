const Footer = () => {
    return (
      <footer className="w-full bg-[#222222] text-white">
        {/* Top Bar */}
        <div className="h-8 bg-[#34967C]" />
  
        {/* Footer Content */}
        <div className="px-6 py-8">
          <div className="lg:flex lg:justify-around gap-8">
            {/* Left Section */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold">ALX</h1>
              <p className="mt-3 text-lg text-left text-gray-300">
                ALX is a platform where travelers can discover and book unique,
                comfortable, and affordable lodging options worldwide. From cozy
                city apartments and tranquil countryside retreats to exotic
                beachside villas, ALX connects you with the perfect place to stay
                for any trip.
              </p>
            </div>
  
            {/* Right Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 flex-1">
              <div>
                <h1 className="font-semibold mb-3">Explore</h1>
                <ul className="font-thin flex flex-col gap-2">
                  <li>Apartments in Dubai</li>
                  <li>Hotels in New York</li>
                  <li>Villa in Spain</li>
                  <li>Mansion in Indonesia</li>
                </ul>
              </div>
  
              <div>
                <h1 className="font-semibold mb-3">Company</h1>
                <ul className="font-thin flex flex-col gap-2">
                  <li>About us</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Brand</li>
                </ul>
              </div>
  
              <div>
                <h2 className="font-semibold mb-3">Help</h2>
                <ul className="font-thin flex flex-col gap-2">
                  <li>Support</li>
                  <li>Cancel booking</li>
                  <li>Refund Process</li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Horizontal Line */}
          <hr className="bg-white opacity-20 w-full mt-8" />
  
          {/* Bottom Section */}
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left mt-6">
            <p className="text-sm text-gray-400">
              Some hotels request you to cancel more than 24 hours before
              check-in. Details <a href="https://marc.com" className="underline">here</a>
            </p>
  
            <ul className="flex flex-wrap justify-center gap-4 mt-4 lg:mt-0 text-sm text-gray-400">
              <li className="hover:underline cursor-pointer">Terms of Service</li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
              <li className="hover:underline cursor-pointer">Cookies Policy</li>
              <li className="hover:underline cursor-pointer">Partners</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  