import { Suspense } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Outlet } from "react-router-dom";
import { Header, LayoutContainer, List, StyledNavLink } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <List>
          <li>
            <StyledNavLink to="/">Shop</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/cart">Shopping Cart</StyledNavLink>
          </li>
        </List>
      </Header>
      <LayoutContainer>
        <main>
          <Suspense
            fallback={
              <RotatingLines
                strokeColor="#581845"
                strokeWidth="5"
                animationDuration="0.75"
                width="150"
                visible={true}
              />
            }
          >
            {children}
            <Outlet />
          </Suspense>
        </main>
      </LayoutContainer>
    </>
  );
};

export default Layout;
