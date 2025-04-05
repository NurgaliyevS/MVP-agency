import "@/styles/globals.css";
import "@/styles/blog.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <script
        defer
        data-website-id="67f0b449a804b6e8eff870b6"
        data-domain="mvpagency.org"
        src="https://datafa.st/js/script.js"
      ></script>
    </>
  );
}
