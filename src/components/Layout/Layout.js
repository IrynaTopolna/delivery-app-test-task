import { Suspense } from "react";
import { LayoutContainer, List, StyledNavLink } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <List>
          <li>
            <StyledNavLink to="/">Shop</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/cart">Shopping Cart</StyledNavLink>
          </li>
        </List>
      </header>
      <LayoutContainer>
        <main>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </main>
      </LayoutContainer>
    </>
  );
};

export default Layout;
