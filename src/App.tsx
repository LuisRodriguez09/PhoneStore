import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import WhatsAppButton from './components/WhatsAppButton';
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={2400} />
      <Routes />
      <WhatsAppButton />
    </>
  );
}

export default App;
