import * as React from "react";
const SvgMessage = (props) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.4}
      d="M36.666 26.566c0 4.65-3.733 8.417-8.383 8.434H11.75c-4.634 0-8.417-3.75-8.417-8.4v-.017s.01-7.377.023-11.087a.83.83 0 0 1 1.347-.653c3.96 3.142 11.042 8.87 11.13 8.945a6.779 6.779 0 0 0 4.217 1.483 6.689 6.689 0 0 0 4.216-1.501c.089-.059 7.012-5.615 11.032-8.809a.833.833 0 0 1 1.352.65c.016 3.682.016 10.955.016 10.955Z"
      fill="#3754DB"
    />
    <path
      d="M35.793 9.456a8.392 8.392 0 0 0-7.41-4.457H11.75a8.392 8.392 0 0 0-7.41 4.457 1.44 1.44 0 0 0 .368 1.796l12.375 9.899a4.71 4.71 0 0 0 2.967 1.048h.033c1.05 0 2.1-.348 2.967-1.048l12.375-9.899a1.44 1.44 0 0 0 .368-1.796Z"
      fill="#3754DB"
    />
  </svg>
);
export default SvgMessage;
