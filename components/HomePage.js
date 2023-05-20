import Image from "next/image";

const HomePage = () => {
  return (
    <div className="my-6 space-y-4 lg:space-y-8">
      <div className="flex lg:space-x-24">
        <div className="w-full lg:w-8/12">
          <div className="rounded overflow-hidden shadow-lg">
            <Image
              src={"/static/images/Rectangle5(2).png"}
              alt="background"
              width={100}
              height={50}
              className="object-fill w-full h-[40vh]"
            />
            <div className="px-4 py-4">
              <span className="text-gray-500 font-semibold">Article</span>
              <div className="flex">
                <div className="w-5/6">
                  <h1 className="py-2 text-2xl font-semibold">
                    What if famous brands had regular fonts? Meet RegularBrands!
                  </h1>
                </div>
                <div className="pt-3 ml-auto">
                  <svg
                    width="20"
                    height="6"
                    viewBox="0 0 20 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <p className="w-full tracking-wide text-gray-600">
                I've worked in UX for the better part of a decade. From now i
                plan to rei...
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-3/12 pl-12">
          <span className="inline-flex py-2 border-b text-gray-600 text-sm">
            Noida, India
            <svg
              width="16"
              height="16"
              className="ml-32"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z"
                fill="black"
              />
            </svg>
          </span>
          <p className="py-4 text-xs text-gray-400">
            Your location will help us serve you better and extend a
            personalised experience
          </p>
        </div>
      </div>
      <div className="w-full lg:w-8/12">
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            src={"/static/images/Rectangle 5.png"}
            alt="background"
            width={100}
            height={50}
            className="w-full h-[40vh]"
          />
          <div className="px-4 py-4">
            <span className="text-gray-500 font-semibold">Article</span>
            <div className="flex">
              <div className="w-5/6">
                <h1 className="py-2 text-2xl font-semibold">
                  What if famous brands had regular fonts? Meet RegularBrands!
                </h1>
              </div>
              <div className="pt-3 ml-auto">
                <svg
                  width="20"
                  height="6"
                  viewBox="0 0 20 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <p className="w-full tracking-wide text-gray-600">
              I've worked in UX for the better part of a decade. From now i plan
              to rei...
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-8/12">
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            src={"/static/images/Rectangle 5 (3).png"}
            alt="background"
            width={100}
            height={50}
            className="w-full h-[40vh]"
          />
          <div className="px-4 py-4">
            <span className="text-gray-500 font-semibold">Article</span>
            <div className="flex">
              <div className="w-5/6">
                <h1 className="py-2 text-2xl font-semibold">
                  What if famous brands had regular fonts? Meet RegularBrands!
                </h1>
              </div>
              <div className="pt-3 ml-auto">
                <svg
                  width="20"
                  height="6"
                  viewBox="0 0 20 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <p className="w-full tracking-wide text-gray-600">
              I've worked in UX for the better part of a decade. From now i plan
              to rei...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
