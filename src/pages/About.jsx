import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 ">
        <p>
          AOBUT <span className="text-primary font-bold">US</span>
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-12">
        <img src={assets.about_image} className="w-full max-w-[360px]" alt="" />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis aliquid atque ullam fugit ratione! Dicta in fugiat
            voluptate. Deserunt asperiores temporibus, provident rerum totam
            quos?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            maxime assumenda, ut enim tenetur ex possimus! Laborum, illum ex non
            consequatur quae maiores reprehenderit velit.
          </p>
          <b className="text-gray-800 ">Lorem ipsum dolor sit amet.</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            voluptatem eveniet aperiam delectus facere quas perferendis dolorem
            est. Quae quod voluptate explicabo inventore! Consequatur, natus.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p className="uppercase">
          Lorem ipsum{" "}
          <span className="text-primary font-semibold"> dolor sit amet.</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-3 ">
        <div className="border px-10 md:px16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Lorem, ipsum.</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, odio?</p>
        </div>
        <div className="border px-10 md:px16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Lorem, ipsum.</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, odio?</p>
        </div>
        <div className="border px-10 md:px16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Lorem, ipsum.</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, odio?</p>
        </div>
       
         
      </div>
    </div>
  );
};

export default About;
