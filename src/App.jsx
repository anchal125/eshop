import { Route, Routes } from "react-router-dom";
import { useLocalStorageSync } from "./hooks/useLocalStorageSync";
import { ShippingFormTemplate } from "./constants";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";
import {
  Loader,
  Modal,
  Login,
  ShippingForm,
  Header,
  CustomCursor,
} from "./Components";
import { ModalContext } from "./Context/ModalContext";
import { deriveAddress } from "./utils/helpers";

const Home = lazy(() =>
  import("./Pages/Home").then((module) => ({ default: module.Home })),
);
const Shop = lazy(() =>
  import("./Pages/Shop").then((module) => ({ default: module.Shop })),
);
const Cart = lazy(() =>
  import("./Pages/Cart").then((module) => ({ default: module.Cart })),
);
const WishList = lazy(() =>
  import("./Pages/WishList").then((module) => ({ default: module.WishList })),
);
const Checkout = lazy(() =>
  import("./Pages/Checkout").then((module) => ({ default: module.Checkout })),
);
const OrderSummary = lazy(() =>
  import("./Pages/OrderSummary").then((module) => ({
    default: module.OrderSummary,
  })),
);
const About = lazy(() =>
  import("./Pages/About").then((module) => ({ default: module.About })),
);
const Product = lazy(() =>
  import("./Pages/Product").then((module) => ({ default: module.Product })),
);
const Error = lazy(() =>
  import("./Pages/Error").then((module) => ({ default: module.Error })),
);
const NotFound = lazy(() =>
  import("./Pages/NotFound").then((module) => ({ default: module.NotFound })),
);

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light",
  );
  const [shippingFormData, setShippingFormData] = useState(
    JSON.parse(localStorage.getItem("shippingFormData")) ||
      ShippingFormTemplate,
  );
  const [input, setInput] = useState("");
  const cart = useSelector((state) => state.cart);
  const shippingAddress = deriveAddress(shippingFormData);
  const [name, setName] = useState("");
  const { modalOpen, setModalOpen } = useContext(ModalContext);

  useLocalStorageSync("cart", cart);
  useLocalStorageSync("shippingFormData", shippingFormData);
  useLocalStorageSync("theme", theme);

  return (
    <div data-theme={theme} className="app">
      <CustomCursor />

      {modalOpen && (
        <Modal
          labelledBy={
            modalOpen === "login" ? "login-modal-title" : "shipping-modal-title"
          }
          setModalOpen={setModalOpen}
          className={`${modalOpen}Modal`}
        >
          {modalOpen === "shipping" && (
            <ShippingForm
              shippingFormData={shippingFormData}
              setShippingFormData={setShippingFormData}
            />
          )}

          {modalOpen === "login" && <Login setName={setName} />}
        </Modal>
      )}

      <Header
        name={name}
        input={input}
        setInput={setInput}
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop input={input} />} />
            <Route
              path="/cart"
              element={<Cart cart={cart} shippingAddress={shippingAddress} />}
            />
            <Route path="/wishList" element={<WishList />} />
            <Route
              path="/checkout"
              element={
                <Checkout
                  shippingFormData={shippingFormData}
                  shippingAddress={shippingAddress}
                  cart={cart}
                />
              }
            />
            <Route
              path="/order"
              element={<OrderSummary shippingAddress={shippingAddress} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/product/:name/:id" element={<Product />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
