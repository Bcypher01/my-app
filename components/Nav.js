const Nav = () => {
  return (
    <div className="hidden lg:block py-1">
      <div className="flex border-b">
        <ul className="flex md:space-x-8 text-gray-600 cursor-pointer">
          <li className="text-black border-b border-black pb-3">
            All posts(32)
          </li>
          <li>Article</li>
          <li>Event</li>
          <li>Education</li>
          <li>Job</li>
        </ul>
        <div className="ml-auto">
          <span className="space-x-4">
            <button className="inline-flex px-5 py-1 bg-gray-200">
              Write a post
              <svg
                className="mt-3 ml-3"
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L5 5L10 0H0Z" fill="#2E2E2E" />
              </svg>
            </button>
            <button className="px-3 py-1 bg-blue-500 text-white">
              Join Group
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
