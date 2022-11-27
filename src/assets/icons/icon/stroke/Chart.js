import * as React from "react";
const SvgChart = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.433 1c3.627 0 6.064 2.546 6.064 6.335v8.83c0 3.79-2.438 6.335-6.064 6.335H7.06c-3.627 0-6.064-2.546-6.064-6.334v-8.83C.996 3.545 3.433 1 7.06 1h9.373Zm0 1.5H7.06c-2.772 0-4.564 1.897-4.564 4.835v8.83C2.496 19.105 4.288 21 7.06 21h9.373c2.773 0 4.564-1.896 4.564-4.834v-8.83c0-2.939-1.791-4.836-4.564-4.836ZM7.118 9.203a.75.75 0 0 1 .75.75v6.86a.75.75 0 0 1-1.5 0v-6.86a.75.75 0 0 1 .75-.75Zm4.667-3.284a.75.75 0 0 1 .75.75v10.143a.75.75 0 0 1-1.5 0V6.669a.75.75 0 0 1 .75-.75Zm4.59 6.909a.75.75 0 0 1 .75.75v3.234a.75.75 0 0 1-1.5 0v-3.234a.75.75 0 0 1 .75-.75Z"
      fill="#3754DB"
    />
  </svg>
);
export default SvgChart;
