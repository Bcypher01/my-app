import Image from "next/image";

const LandingPageImage = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('/static/images/headway-5QgIuuBxKwM-unsplash.jpg')] bg-gray-400 ">
      <div className="w-full h-[54vh] px-[5vw]">
        <h1 className="font-semibold text-3xl text-white px-16 pt-[38vh]">
          Computer Engineering
        </h1>
        <p className="text-white px-16">142,765 Engineers follow this</p>
      </div>
    </section>
  );
};

export default LandingPageImage;
