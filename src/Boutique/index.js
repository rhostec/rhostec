import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Boutique from "./Boutique";

import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <Boutique/>
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);