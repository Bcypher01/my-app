import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="hidden lg:flex justify-center items-center bg-white border-b-1 shadow-md py-3">
        <div className="w-[90vw] flex justify-between">
          <div className="w-4/12 cursor-pointer">
            <svg
              width="163"
              height="24"
              viewBox="0 0 163 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M96.7952 15.498C98.7164 15.498 100.274 13.9393 100.274 12.0165C100.274 10.0938 98.7164 8.53503 96.7952 8.53503C94.8739 8.53503 93.3164 10.0938 93.3164 12.0165C93.3164 13.9393 94.8739 15.498 96.7952 15.498Z"
                fill="#CDDC36"
              />
              <path
                d="M84.7881 11.1465L90.2737 5.65649H86.5612C85.5411 7.31878 84.9331 9.20114 84.7881 11.1465Z"
                fill="#DAE233"
              />
              <path
                d="M95.9587 0C93.9447 0.127315 91.9978 0.773184 90.3066 1.875V5.658L95.9587 0Z"
                fill="#DAE233"
              />
              <path
                d="M108.769 11.1465L103.283 5.65649H106.996C108.031 7.31208 108.64 9.19811 108.769 11.1465Z"
                fill="#DAE233"
              />
              <path
                d="M97.6316 0C99.6455 0.127382 101.592 0.773246 103.284 1.875V5.658L97.6316 0Z"
                fill="#DAE233"
              />
              <path
                d="M90.3067 12.786H84.821C84.9503 14.7344 85.5594 16.6205 86.5941 18.276H90.3067V12.786Z"
                fill="#DAE233"
              />
              <path
                d="M103.318 12.786H108.804C108.674 14.7344 108.065 16.6204 107.03 18.276H103.318V12.786Z"
                fill="#DAE233"
              />
              <path
                d="M95.9587 5.59052L90.4131 11.1405H84.7881L95.9587 -0.00598145V5.59052Z"
                fill="#46B746"
              />
              <path
                d="M97.6313 23.9655C99.6561 23.8934 101.623 23.2683 103.318 22.158V12.786L97.6313 18.477V23.9655Z"
                fill="#46B746"
              />
              <path
                d="M95.9257 18.444L90.3066 12.8205V22.1925C92.0031 23.2733 93.9503 23.8961 95.9587 24V18.45L95.9257 18.444Z"
                fill="#46B746"
              />
              <path
                d="M97.6313 5.59051L103.177 11.1405H108.796L97.6313 0V5.59051Z"
                fill="#46B746"
              />
              <path
                d="M17.6891 22.6215C17.5055 22.6381 17.3218 22.5905 17.1694 22.4869C17.0169 22.3833 16.905 22.2299 16.8527 22.053L14.3047 15.1245H4.18174L1.70719 22.053C1.6472 22.2251 1.5335 22.3732 1.38289 22.4756C1.23228 22.578 1.05276 22.6291 0.870856 22.6215C0.724626 22.6204 0.58097 22.5829 0.45275 22.5125C0.32453 22.4422 0.21575 22.3411 0.136148 22.2183C0.0565459 22.0955 0.00860786 21.9549 -0.00337406 21.8091C-0.015356 21.6632 0.00899272 21.5167 0.0674911 21.3825L6.62331 3.27303C6.75931 2.67424 7.09522 2.13972 7.5756 1.75768C8.05598 1.37563 8.65213 1.16888 9.26572 1.17153C9.87827 1.1728 10.4731 1.37724 10.9572 1.75287C11.4413 2.1285 11.7873 2.65414 11.9411 3.24754L18.5359 21.39C18.5707 21.4868 18.5934 21.5876 18.6033 21.69C18.5982 21.9326 18.5007 22.1641 18.3308 22.3372C18.1609 22.5103 17.9313 22.612 17.6891 22.6215ZM4.84571 13.35H13.6423L10.1635 3.60903C10.1236 3.39742 10.0128 3.20579 9.84923 3.06585C9.68568 2.92591 9.47929 2.84606 9.26422 2.83953C8.86454 2.83953 8.56477 3.10755 8.36493 3.64355L4.84571 13.35Z"
                fill="#27A365"
              />
              <path
                d="M24.5161 3.21304H17.9573C17.8388 3.22001 17.7202 3.20269 17.6087 3.16212C17.4972 3.12154 17.3951 3.05858 17.3088 2.97711C17.2225 2.89564 17.1537 2.79736 17.1067 2.68833C17.0596 2.5793 17.0354 2.46179 17.0354 2.34304C17.0354 2.22429 17.0596 2.1068 17.1067 1.99777C17.1537 1.88874 17.2225 1.79046 17.3088 1.70899C17.3951 1.62752 17.4972 1.56456 17.6087 1.52398C17.7202 1.48341 17.8388 1.46609 17.9573 1.47306H32.7071C32.9377 1.47306 33.1588 1.56472 33.3218 1.72787C33.4848 1.89103 33.5764 2.1123 33.5764 2.34304C33.5764 2.57378 33.4848 2.79507 33.3218 2.95823C33.1588 3.12138 32.9377 3.21304 32.7071 3.21304H26.2562V21.8236C26.2562 21.9378 26.2337 22.0509 26.19 22.1565C26.1464 22.2621 26.0823 22.3579 26.0016 22.4387C25.9209 22.5195 25.8251 22.5836 25.7196 22.6273C25.6141 22.6711 25.5011 22.6935 25.3869 22.6935C25.2727 22.6935 25.1597 22.6711 25.0542 22.6273C24.9488 22.5836 24.8529 22.5195 24.7722 22.4387C24.6915 22.3579 24.6275 22.2621 24.5838 22.1565C24.5401 22.0509 24.5176 21.9378 24.5176 21.8236L24.5161 3.21304Z"
                fill="#27A365"
              />
              <path
                d="M51.6058 15.498C51.6101 16.4726 51.4166 17.4379 51.0371 18.3354C50.6576 19.2329 50.1 20.044 49.3981 20.7195C48.6443 21.4663 47.7438 22.0483 46.7536 22.4286C45.7634 22.8089 44.7051 22.9794 43.6456 22.929C42.5348 22.9521 41.4305 22.7539 40.3969 22.346C39.3633 21.9381 38.421 21.3286 37.6249 20.553C35.9976 18.9564 35.0302 16.8053 34.915 14.5275C34.7813 12.8903 34.7813 11.2448 34.915 9.60753C35.0309 7.34954 35.9995 5.21991 37.6249 3.64953C38.4165 2.86532 39.3571 2.24793 40.3913 1.8339C41.4254 1.41986 42.532 1.21757 43.6456 1.23901C45.2511 1.195 46.8324 1.63827 48.1815 2.51052C49.5305 3.38277 50.5843 4.64318 51.2042 6.12603C51.2557 6.26307 51.2736 6.41046 51.2565 6.55587C51.2394 6.70128 51.1878 6.84047 51.1059 6.96179C51.024 7.08312 50.9142 7.18305 50.7858 7.2532C50.6574 7.32336 50.5141 7.36169 50.3678 7.36501C50.185 7.37716 50.0034 7.32783 49.8519 7.22482C49.7004 7.12181 49.5876 6.97104 49.5315 6.79652C49.0304 5.65659 48.2047 4.68979 47.1576 4.01695C46.1104 3.34411 44.8884 2.99507 43.6441 3.01351C42.7785 3.00046 41.9189 3.15949 41.1152 3.48134C40.3114 3.8032 39.5795 4.28149 38.9618 4.88851C37.6583 6.11348 36.8691 7.78871 36.7541 9.57453C36.5869 11.2438 36.5869 12.9257 36.7541 14.595C36.8713 16.3827 37.6454 18.0636 38.9274 19.314C39.5516 19.9214 40.2893 20.3997 41.0984 20.7214C41.9075 21.0432 42.7721 21.2021 43.6426 21.189C45.2602 21.2597 46.8461 20.725 48.0911 19.689C48.659 19.2039 49.1103 18.5969 49.4113 17.9131C49.7124 17.2293 49.8554 16.4863 49.8297 15.7395V13.389H44.8132C44.5826 13.389 44.3615 13.2974 44.1985 13.1342C44.0355 12.9711 43.9439 12.7498 43.9439 12.519C43.9439 12.2883 44.0355 12.067 44.1985 11.9038C44.3615 11.7407 44.5826 11.649 44.8132 11.649H49.9302C50.1493 11.628 50.3704 11.6545 50.5783 11.7268C50.7862 11.7992 50.9761 11.9156 51.1349 12.0681C51.2937 12.2207 51.4177 12.4057 51.4985 12.6106C51.5793 12.8156 51.6149 13.0355 51.6028 13.2555L51.6058 15.498Z"
                fill="#27A365"
              />
              <path
                d="M57.1604 21.8911C57.1692 22.0268 57.1496 22.1628 57.1028 22.2904C57.056 22.418 56.9831 22.5345 56.8887 22.6322C56.7942 22.73 56.6804 22.8069 56.5545 22.858C56.4287 22.9091 56.2935 22.9333 56.1577 22.9291C56.0235 22.9277 55.8909 22.8997 55.7676 22.8466C55.6443 22.7936 55.5327 22.7165 55.4394 22.6199C55.3462 22.5233 55.273 22.4092 55.2241 22.2841C55.1753 22.159 55.1518 22.0254 55.155 21.8911V20.2516C55.0546 18.9121 57.2293 18.9121 57.1619 20.2516L57.1604 21.8911Z"
                fill="#27A365"
              />
              <path
                d="M58.0643 2.44352C58.0206 2.30948 58.0102 2.16685 58.0338 2.02787C58.0575 1.8889 58.1145 1.75775 58.2001 1.64573C58.2856 1.53372 58.3971 1.44418 58.5248 1.38483C58.6526 1.32548 58.7929 1.29811 58.9336 1.30504C59.035 1.29453 59.1374 1.30454 59.2349 1.33448C59.3323 1.36442 59.4228 1.41368 59.5008 1.47931C59.5788 1.54495 59.6429 1.62563 59.6891 1.71655C59.7353 1.80747 59.7628 1.90677 59.7699 2.00853L64.0175 21.0885C64.0175 21.3225 64.2514 21.2565 64.3173 21.0885L69.133 2.88003C69.1996 2.44651 69.4246 2.05315 69.7643 1.77606C70.104 1.49897 70.5344 1.35785 70.9721 1.38002C71.4083 1.36413 71.8354 1.50756 72.1738 1.78354C72.5121 2.05953 72.7386 2.44923 72.8111 2.88003L77.5264 21.123C77.5938 21.291 77.8262 21.357 77.8262 21.123L82.1412 2.07303C82.1596 1.85755 82.2601 1.65741 82.422 1.51413C82.5838 1.37085 82.7946 1.29543 83.0106 1.30353C83.1525 1.28875 83.2959 1.31138 83.4264 1.36918C83.5569 1.42697 83.67 1.51792 83.7546 1.63301C83.8391 1.74809 83.8921 1.88332 83.9083 2.02524C83.9245 2.16716 83.9033 2.31084 83.8469 2.44204L79.5003 21.4545C79.4069 21.864 79.1774 22.2296 78.8492 22.4914C78.5211 22.7533 78.1139 22.8959 77.6942 22.8959C77.2746 22.8959 76.8673 22.7533 76.5392 22.4914C76.2111 22.2296 75.9816 21.864 75.8882 21.4545L71.0725 3.21154C71.0725 3.17176 71.0567 3.1336 71.0286 3.10547C71.0005 3.07734 70.9624 3.06153 70.9226 3.06153C70.8829 3.06153 70.8447 3.07734 70.8166 3.10547C70.7885 3.1336 70.7727 3.17176 70.7727 3.21154L65.8896 21.4545C65.7962 21.864 65.5666 22.2296 65.2385 22.4914C64.9104 22.7533 64.5032 22.8959 64.0835 22.8959C63.6638 22.8959 63.2566 22.7533 62.9285 22.4914C62.6004 22.2296 62.3708 21.864 62.2774 21.4545L58.0643 2.44352Z"
                fill="#5C5D5D"
              />
              <path
                d="M125.893 22.7611C125.76 22.7553 125.629 22.7227 125.508 22.6652C125.387 22.6078 125.279 22.5266 125.19 22.4266L119.237 14.9626C119.065 14.6633 118.816 14.4156 118.516 14.2449C118.216 14.0743 117.876 13.987 117.531 13.9921H113.317V21.8581C113.307 22.0887 113.214 22.3079 113.053 22.4738C112.893 22.6398 112.677 22.741 112.447 22.7581C112.215 22.7463 111.997 22.6468 111.835 22.4797C111.674 22.3127 111.582 22.0904 111.578 21.8581V3.21307C111.568 2.98177 111.606 2.75094 111.69 2.53521C111.774 2.31948 111.902 2.12357 112.066 1.95994C112.229 1.79631 112.425 1.66852 112.641 1.58471C112.856 1.5009 113.087 1.46288 113.318 1.47309H119.439C121.19 1.3867 122.906 1.98725 124.222 3.14708C124.846 3.74334 125.333 4.4677 125.651 5.2704C125.968 6.07309 126.108 6.93507 126.061 7.79707C126.061 11.3116 123.987 13.2871 120.515 13.7551L126.602 21.3196C126.722 21.4838 126.782 21.6848 126.77 21.8881C126.774 22.0042 126.754 22.1199 126.711 22.2279C126.669 22.3359 126.604 22.434 126.522 22.5159C126.439 22.5979 126.341 22.6619 126.233 22.7041C126.125 22.7463 126.009 22.7657 125.893 22.7611V22.7611ZM113.351 12.2176H118.97C122.549 12.2176 124.321 10.7446 124.321 7.73257C124.321 4.95457 122.615 3.21307 119.405 3.21307H113.351V12.2176Z"
                fill="#5C5D5D"
              />
              <path
                d="M129.673 2.24254C129.673 2.0118 129.765 1.79053 129.928 1.62737C130.091 1.46422 130.312 1.37256 130.542 1.37256C130.773 1.37256 130.994 1.46422 131.157 1.62737C131.32 1.79053 131.412 2.0118 131.412 2.24254V20.8201H141.981C142.216 20.8313 142.438 20.9298 142.605 21.0962C142.771 21.2626 142.869 21.485 142.881 21.72C142.869 21.9521 142.77 22.1711 142.603 22.3326C142.436 22.4942 142.214 22.5862 141.981 22.59H131.446C131.211 22.6 130.976 22.561 130.756 22.4753C130.536 22.3897 130.337 22.2593 130.17 22.0925C130.004 21.9257 129.873 21.726 129.788 21.5062C129.702 21.2864 129.663 21.0512 129.673 20.8155V2.24254Z"
                fill="#5C5D5D"
              />
              <path
                d="M148.035 22.626C147.81 22.6386 147.584 22.6028 147.373 22.521C147.162 22.4392 146.971 22.3133 146.813 22.1517C146.654 21.9902 146.532 21.7966 146.455 21.584C146.377 21.3714 146.346 21.1447 146.363 20.919V3.14551C146.346 2.91983 146.377 2.69311 146.455 2.48052C146.532 2.26793 146.654 2.07437 146.813 1.91278C146.971 1.75119 147.162 1.62529 147.373 1.5435C147.584 1.46171 147.81 1.42592 148.035 1.43851H153.257C154.484 1.35703 155.713 1.53549 156.866 1.96224C158.019 2.38899 159.068 3.05442 159.946 3.91502C161.595 5.67549 162.515 7.99592 162.521 10.4085C162.588 11.512 162.588 12.6185 162.521 13.722C162.485 16.1277 161.553 18.4333 159.909 20.1885C159.027 21.0323 157.981 21.6848 156.836 22.1053C155.69 22.5257 154.47 22.7051 153.253 22.632H148.035V22.626ZM160.775 10.341C160.508 5.85601 158.065 3.21152 153.217 3.21152H148.133V20.8185H153.217C158.067 20.8185 160.541 18.141 160.775 13.689C160.843 12.5746 160.844 11.4571 160.778 10.3425L160.775 10.341Z"
                fill="#5C5D5D"
              />
              <path
                d="M90.3007 22.2V12.8205L95.9123 18.45H95.9452V24C93.9399 23.8981 91.9952 23.278 90.3007 22.2ZM97.6149 18.4845L103.292 12.7935V22.1655C101.6 23.2755 99.6368 23.9006 97.6149 23.973V18.4845ZM103.292 18.2835V12.786H108.771C108.641 14.734 108.033 16.6199 107.001 18.276L103.292 18.2835ZM86.5926 18.2835C85.5586 16.6252 84.9505 14.7366 84.8225 12.786H90.3007V18.276L86.5926 18.2835ZM93.3073 12.0165C93.3085 11.3294 93.5132 10.658 93.8955 10.0873C94.2778 9.5165 94.8206 9.07197 95.4553 8.80984C96.0899 8.54771 96.788 8.47973 97.4612 8.61451C98.1345 8.74929 98.7527 9.08078 99.2378 9.56707C99.7229 10.0534 100.053 10.6727 100.187 11.3467C100.32 12.0207 100.251 12.7192 99.9879 13.3539C99.7249 13.9886 99.2798 14.5311 98.7088 14.9127C98.1379 15.2943 97.4667 15.498 96.7801 15.498C96.3236 15.4976 95.8717 15.4072 95.4502 15.2321C95.0286 15.0569 94.6457 14.8003 94.3232 14.477C94.0008 14.1538 93.7451 13.7701 93.5708 13.3479C93.3964 12.9257 93.3069 12.4733 93.3073 12.0165ZM103.161 11.1465L97.6149 5.5965V0C99.6266 0.127176 101.571 0.773109 103.259 1.875V5.64L103.276 5.6565H106.972C107.998 7.30233 108.605 9.17515 108.739 11.1105L108.771 11.1465H103.161ZM84.7896 11.1465L84.83 11.1C84.9807 9.1712 85.5863 7.30566 86.5971 5.6565H90.2842L90.3007 5.64V1.875C91.9891 0.773109 93.9336 0.127176 95.9452 0V5.5905L90.3996 11.1405L84.7896 11.1465Z"
                fill="url(#paint0_linear_1_787)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_787"
                  x1="84.7896"
                  y1="10.464"
                  x2="96.7907"
                  y2="23.9906"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00A854" />
                  <stop offset="1" stop-color="#004D25" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-6/12">
            <form action="" method="get">
              <input
                type="text"
                className="bg-gray-200 py-1 px-4 rounded-full w-3/6"
                placeholder="Search for your favorite groups in ATG"
                name=""
                id=""
              />
            </form>
          </div>
          <div className="flex w-2/12 cursor-pointer">
            Create Account.{"  "}
            <span className="flex text-blue-400">
              It's free
              <svg
                className="mt-3 mx-1"
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L5 5L10 0H0Z" fill="#2E2E2E" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
