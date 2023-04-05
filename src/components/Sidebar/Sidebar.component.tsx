import React from "react";

import {
  Container,
  LeftPanel,
  LeftPanelNav,
  LeftPanelNavInner,
  NavIconItem,
  NavigationIconsPanel,
} from "./Sidebar.styles";
import { ROUTES } from "src/routing/routes";
import { HomeIcon, IconProps } from "../Icons";

interface SidebarItem {
  route: string;
  icon: React.FC<IconProps>;
  label: string;
  labelRef: React.RefObject<HTMLAnchorElement>;
  iconRef: React.RefObject<HTMLAnchorElement>;
}

const items: SidebarItem[] = [
  {
    route: ROUTES.dashboard,
    icon: HomeIcon,
    label: "Dashboard",
    labelRef: React.createRef(),
    iconRef: React.createRef(),
  },
];

export function Sidebar() {
  return (
    <Container>
      <LeftPanel>
        <LeftPanelNav>
          <LeftPanelNavInner>
            <NavigationIconsPanel>
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavIconItem
                    key={item.route}
                    to={item.route}
                    ref={item.iconRef}
                    onMouseOver={() => {
                      item.labelRef.current?.classList.add("hover");
                    }}
                    onMouseLeave={() => {
                      item.labelRef.current?.classList.remove("hover");
                    }}
                  >
                    <Icon />
                  </NavIconItem>
                );
              })}
            </NavigationIconsPanel>
          </LeftPanelNavInner>
        </LeftPanelNav>
      </LeftPanel>
    </Container>
  );
}
