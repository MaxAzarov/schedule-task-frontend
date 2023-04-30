import { SvgIcon, SvgIconProps } from "@mui/material";

export type IconProps = SvgIconProps;

export function HomeIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M21 19.9998C21 20.265 20.8946 20.5194 20.7071 20.7069C20.5196 20.8944 20.2652 20.9998 20 20.9998H4C3.73478 20.9998 3.48043 20.8944 3.29289 20.7069C3.10536 20.5194 3 20.265 3 19.9998V9.48978C2.99989 9.3374 3.03462 9.187 3.10152 9.05008C3.16841 8.91317 3.26572 8.79335 3.386 8.69978L11.386 2.47778C11.5615 2.34123 11.7776 2.26709 12 2.26709C12.2224 2.26709 12.4385 2.34123 12.614 2.47778L20.614 8.69978C20.7343 8.79335 20.8316 8.91317 20.8985 9.05008C20.9654 9.187 21.0001 9.3374 21 9.48978V19.9998ZM19 18.9998V9.97778L12 4.53378L5 9.97778V18.9998H19Z" />
    </SvgIcon>
  );
}

export function SettingsIcon(props: IconProps) {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M13.7473 20.4429H20.9999"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="none"
        d="M12.78 3.79479C13.5557 2.86779 14.95 2.73186 15.8962 3.49173C15.9485 3.53296 17.6295 4.83879 17.6295 4.83879C18.669 5.46719 18.992 6.80311 18.3494 7.82259C18.3153 7.87718 8.81195 19.7645 8.81195 19.7645C8.49578 20.1589 8.01583 20.3918 7.50291 20.3973L3.86353 20.443L3.04353 16.9723C2.92866 16.4843 3.04353 15.9718 3.3597 15.5773L12.78 3.79479Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0208 6.00092L16.473 10.188"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export function CheckGreenCircleIcon(props: IconProps) {
  return (
    <SvgIcon width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <circle cx="9" cy="9" r="9" fill="#57A849" />
      <path
        d="M6 9.37311L8.374 11.7461L12.5 7.62012"
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
