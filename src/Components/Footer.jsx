import { Explore, Help, QuickLinks, Socials } from "../Constants/Footer";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div>
            <h4 className="text-lg font-bold">
              Beauty<span className="text-yellow-600">Home</span>
            </h4>
            <p className="mt-2">&copy; 2024</p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Explore BeautyHome</h4>
            <ul className="mt-2 space-y-2">
              {Explore.map((exploreItem, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="text-gray-600">
                      {exploreItem}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Help & Information</h4>
            <ul className="mt-2 space-y-2">
              {Help.map((helpItem, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="text-gray-600">
                      {helpItem}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              {QuickLinks.map((quickLinksItem, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="text-gray-600">
                      {quickLinksItem}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Connect With Us</h4>
            <ul className="mt-2 flex items-center gap-4">
              {Socials.map((socialItems, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="text-gray-600">
                      {socialItems}
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
