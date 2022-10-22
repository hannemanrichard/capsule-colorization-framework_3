import React from "react";

const Icons = ({ icon }) => {
  const documentIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#D4E7EE"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
      />
    </svg>
  );

  const heartIcon = (
    <svg
      viewBox="0 0 91 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg "
      strokeWidth={1.5}
      className="w-6 h-6"
    >
      <path
        d="M67.0682 0.183762C80.1533 0.183762 90.7576 11.0102 90.7576 26.1672C90.7576 56.4812 58.4539 73.8035 47.6859 80.2994C39.1707 75.1633 17.1783 63.2499 8.35725 43.4938L0.307159 43.4895V34.8284H5.51883C4.91452 31.9814 4.61133 29.0782 4.61432 26.1672C4.61432 11.0102 15.3822 0.183762 28.3037 0.183762C36.315 0.183762 43.3788 4.51434 47.6859 8.84491C51.9931 4.51434 59.0569 0.183762 67.0682 0.183762ZM67.0682 8.84491C62.4337 8.84491 57.4201 11.3133 53.7763 14.9683L47.6859 21.0918L41.5956 14.9683C37.9518 11.3133 32.9382 8.84491 28.3037 8.84491C19.9478 8.84491 13.2286 16.0163 13.2286 26.1672C13.2286 29.1336 13.6163 32.0221 14.3787 34.8284H23.7123L32.6109 19.9139L45.5324 41.5667L49.5553 34.8284H69.2218V43.4895H54.431L45.5324 58.404L32.6109 36.7511L28.588 43.4895H18.001C21.4036 49.4397 26.5507 55.0435 33.2354 60.3917C36.4443 62.9554 39.8684 65.3502 43.6631 67.7537C44.9509 68.5722 46.2258 69.356 47.6859 70.2308C49.1461 69.356 50.421 68.5722 51.7088 67.758C55.3148 65.4963 58.7945 63.0372 62.1322 60.3917C74.9718 50.1283 82.1433 38.9121 82.1433 26.1672C82.1433 15.9471 75.5231 8.84491 67.0682 8.84491Z"
        fill="#D4E7EE"
      />
    </svg>
  );
  const chatIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        fill="#D4E7EE"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
      />
    </svg>
  );

  const chartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        fill="#D4E7EE"
        strokeLinejoin="round"
        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
      />
    </svg>
  );

  const calendarIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        fill="#D4E7EE"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
      />
    </svg>
  );

  switch (icon) {
    case "calendar":
      return calendarIcon;
    case "chat":
      return chatIcon;
    case "chart":
      return chartIcon;
    case "heart":
      return heartIcon;
    default:
      return documentIcon;
  }
};

export default Icons;