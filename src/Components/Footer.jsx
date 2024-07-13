import { Explores, Helps, QuickLinks, Socials } from "../Constants/Footer";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div>
            <h4 className="text-[28px] font-bold">
              Beauty<span className="text-yellow-600">Home</span>
            </h4>
            <p className="mt-2">&copy; 2024</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Explore BeautyHome</h4>
            <ul className="mt-2 space-y-2">
              {Explores.map((explore, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:underline">
                      {explore}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">Help & Information</h4>
            <ul className="mt-2 space-y-2">
              {Helps.map((help, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:underline">
                      {help}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              {QuickLinks.map((quickLink, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:underline">
                      {quickLink}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">Connect With Us</h4>
            <ul className="mt-2 flex items-center gap-4">
              {Socials.map((social, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="text-gray-600">
                      {<social.icon className="text-xl text-yellow-500" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
