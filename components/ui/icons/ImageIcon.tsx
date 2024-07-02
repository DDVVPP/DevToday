import React from "react";
import IconWrapper from "./IconWrapper";
const ImageIcon = (props: any) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.3338 0C17.7231 0 20 2.37811 20 5.91672V14.0833C20 17.6219 17.7231 20 14.3328 20H5.66618C2.2769 20 0 17.6219 0 14.0833V5.91672C0 2.37811 2.2769 0 5.66618 0H14.3338ZM15.4366 10.5501C14.3646 9.88132 13.5371 10.8204 13.3138 11.1207C13.0986 11.4107 12.9136 11.7306 12.7185 12.0506C12.2419 12.84 11.6958 13.7503 10.7506 14.2797C9.37699 15.0402 8.3342 14.3395 7.58404 13.8297C7.30248 13.6398 7.02897 13.4603 6.75645 13.3406C6.08473 13.0506 5.48038 13.3808 4.5834 14.5201C4.11279 15.1156 3.6462 15.7059 3.17358 16.2941C2.89102 16.646 2.95839 17.1889 3.3395 17.4241C3.94788 17.7988 4.68999 18 5.52864 18H13.9564C14.432 18 14.9087 17.935 15.3632 17.7864C16.3869 17.452 17.1994 16.6863 17.6237 15.6749C17.9817 14.8246 18.1557 13.7926 17.8208 12.934C17.7092 12.6491 17.5423 12.3839 17.308 12.1507C16.6936 11.5408 16.1194 10.9711 15.4366 10.5501ZM6.49886 4C5.12021 4 4 5.12173 4 6.5C4 7.87827 5.12021 9 6.49886 9C7.8765 9 8.99772 7.87827 8.99772 6.5C8.99772 5.12173 7.8765 4 6.49886 4Z"
        fill="#C5D0E6"
      />
    </svg>
  );
};

export default IconWrapper(ImageIcon);
