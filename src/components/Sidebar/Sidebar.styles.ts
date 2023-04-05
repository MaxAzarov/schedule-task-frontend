import { css, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const SIDEBAR_NORMAL_WIDTH = 68;

export const Container = styled("div")`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 2;
  width: ${SIDEBAR_NORMAL_WIDTH}px;
  transition: width 0.2s ease;
  height: 100%;
`;

export const LeftPanel = styled("div")`
  width: ${SIDEBAR_NORMAL_WIDTH}px;
  display: flex;
  flex-direction: column;
`;

export const LeftPanelNav = styled("div")`
  position: relative;
  background: ${(props) => props.theme.palette.primary.light};
  height: 100%;
`;

export const LeftPanelNavInner = styled("div")`
  height: 100%;
  overflow: auto;
`;

export const NavigationIconsPanel = styled("div")`
  position: relative;
  width: 100%;
  padding: 6px 0;
`;

const itemStyles = css`
  display: flex;
  width: 100%;
  padding: 14px 0;
  cursor: pointer;
`;

export const NavIconItem = styled(NavLink)`
  ${itemStyles}
  justify-content: center;

  position: relative;
  transition: color 0.2s ease;
  color: ${(props) => props.theme.palette.common.white};

  &.active {
    color: #48b6f3;

    &:after {
      display: block;
    }
  }

  &:hover,
  &.hover {
    color: #48b6f3;
  }

  &:after {
    content: "";
    position: absolute;
    right: 1px;
    top: 50%;
    height: 30px;
    width: 2px;
    transform: translateY(-50%);
    background: #1976d2;
    display: none;
  }
`;
