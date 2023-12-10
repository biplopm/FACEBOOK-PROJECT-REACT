import { RouterProvider } from "react-router-dom";
import router from "./router/route";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar= {true}
      newestOnTop
      closeOnClick={true}
      rtl
      pauseOnFocusLoss={true}
      draggable={true}
      pauseOnHover={true}
      theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
