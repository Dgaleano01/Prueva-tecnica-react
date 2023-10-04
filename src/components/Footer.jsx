import facebook from "../assets/social/facebook-white.svg";
import twitter from "../assets/social/twitter-white.svg";
import instagram from "../assets/social/instagram-white.svg";
import appStore from "../assets/store/app-store.svg";
import googlePlay from "../assets/store/play-store.svg";
import microsoft from "../assets/store/windows-store.svg";

function Footer() {
  return (
    <div>
      <div className="bg-zinc-900 w-full py-8 text-white flex justify-center">
        <div className="w-9/12">
          <div>
            <ul className="flex flex-wrap text-sm">
              <li className="mr-3">Home</li>
              <li className="mr-3">|</li>
              <li className="mr-3">Terms and Conditions</li>
              <li className="mr-3">|</li>
              <li className="mr-3">Privacy Policy</li>
              <li className="mr-3">|</li>
              <li className="mr-3">Collection Statment</li>
              <li className="mr-3">|</li>
              <li className="mr-3">Help</li>
              <li className="mr-3">|</li>
              <li className="mr-3">Manage Account</li>
            </ul>
            <p className="text-xs my-5 text-zinc-500">Copyrigth © 2016 DEMO Streaming. All rights Reserved.</p>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-8">
            <div className="flex my-2 sm:m-0">
              <img className="w-4 mr-5" src={facebook} />
              <img className="w-7 mr-5" src={twitter} />
              <img className="w-6 mr-5" src={instagram} />
            </div>
            <div className="flex mt-2 sm:m-0">
              <img className="w-20 sm:w-32 mr-5" src={appStore} />
              <img className="w-20 sm:w-32 mr-5" src={googlePlay} />
              <img className="w-20 sm:w-32 mr-5" src={microsoft} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
