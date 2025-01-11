import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
      <WhatsAppButton />
    </>
  );
}

export default App;
