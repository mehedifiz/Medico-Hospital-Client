import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 ">
        <p>
          CONTACT <span className="text-primary font-bold">US</span>
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-12">
        <img
          src={assets.contact_image}
          className="w-full max-w-[360px]"
          alt=""
        />

        <div className="flex flex-col justify-center items-start  gap-6  text-sm ">
          <p className="font-semibold text-lg text-gray-600">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet <br />
            consectetur adipisicing elit. Rem, sint.
          </p>
          <p className="text-gray-500">
            543546546546 <br /> emaik@s.cpm
          </p>
          <p className="font-semibold text-lg text-gray-600 ">
            Lorem, ipsum dolor.
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            esse.
          </p>
          <button className="border border-black px-12 py-4 text-sm hover:bg-gray-700  hover:text-white transition-all  duration-300 ">
            button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
