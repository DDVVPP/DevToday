import React from "react";
import IconWrapper from "./IconWrapper";
const Upload = (props: any) => {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 10.5C8.13261 10.5 8.25978 10.4474 8.35355 10.3536C8.44732 10.2598 8.5 10.1327 8.5 10V2.68471L9.62 3.99205C9.70628 4.09283 9.82907 4.15521 9.96134 4.16546C10.0936 4.17571 10.2245 4.133 10.3253 4.04671C10.4261 3.96043 10.4885 3.83764 10.4987 3.70537C10.509 3.57309 10.4663 3.44216 10.38 3.34138L8.38 1.00805C8.33306 0.953157 8.27478 0.909087 8.20919 0.878871C8.14359 0.848654 8.07222 0.833008 8 0.833008C7.92777 0.833008 7.85641 0.848654 7.79081 0.878871C7.72521 0.909087 7.66694 0.953157 7.62 1.00805L5.62 3.34138C5.57727 3.39128 5.5448 3.44911 5.52442 3.51156C5.50405 3.57402 5.49618 3.63987 5.50125 3.70537C5.50633 3.77086 5.52426 3.83472 5.55401 3.89329C5.58376 3.95186 5.62476 4.00399 5.67466 4.04671C5.72457 4.08944 5.7824 4.12191 5.84485 4.14229C5.9073 4.16266 5.97316 4.17054 6.03865 4.16546C6.10415 4.16038 6.168 4.14246 6.22657 4.1127C6.28514 4.08295 6.33727 4.04195 6.38 3.99205L7.5 2.68538V10C7.5 10.276 7.724 10.5 8 10.5Z"
      />
      <path d="M10.6663 6C10.1983 6 9.96434 6 9.79567 6.11267C9.72315 6.16119 9.66086 6.22348 9.61234 6.296C9.49967 6.46467 9.49967 6.69867 9.49967 7.16667V10C9.49967 10.3978 9.34164 10.7794 9.06033 11.0607C8.77903 11.342 8.3975 11.5 7.99967 11.5C7.60185 11.5 7.22032 11.342 6.93901 11.0607C6.65771 10.7794 6.49967 10.3978 6.49967 10V7.16667C6.49967 6.69867 6.49967 6.46467 6.38701 6.296C6.33848 6.22348 6.27619 6.16119 6.20367 6.11267C6.03501 6 5.80101 6 5.33301 6C3.44767 6 2.50434 6 1.91901 6.586C1.33301 7.17133 1.33301 8.11333 1.33301 9.99933V10.666C1.33301 12.5527 1.33301 13.4947 1.91901 14.0807C2.50434 14.6667 3.44767 14.6667 5.33301 14.6667H10.6663C12.5517 14.6667 13.495 14.6667 14.0803 14.0807C14.6663 13.4947 14.6663 12.552 14.6663 10.6667V10C14.6663 8.114 14.6663 7.17133 14.0803 6.586C13.495 6 12.5517 6 10.6663 6Z" />
    </svg>
  );
};

export default IconWrapper(Upload);
