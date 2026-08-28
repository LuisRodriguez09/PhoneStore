import {
  PhoneFill,
  EnvelopeFill,
  GeoAltFill,
  Facebook,
  Instagram,
  Twitter,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="mt-auto bg-slate-950 text-slate-200">
      <div className="content-wrap grid grid-cols-1 gap-8 py-10 sm:py-12 lg:grid-cols-3 lg:gap-12">
        <section>
          <h6 className="mb-4 text-sm font-black tracking-wide text-white">SIGN UP FOR OUR NEWSLETTER</h6>
          <div className="flex items-center gap-3">
            <a className="rounded-full border border-slate-700 p-2 transition hover:border-slate-500 hover:bg-slate-900" href="#" aria-label="Facebook">
              <Facebook />
            </a>
            <a className="rounded-full border border-slate-700 p-2 transition hover:border-slate-500 hover:bg-slate-900" href="#" aria-label="Instagram">
              <Instagram />
            </a>
            <a className="rounded-full border border-slate-700 p-2 transition hover:border-slate-500 hover:bg-slate-900" href="#" aria-label="Twitter">
              <Twitter />
            </a>
          </div>
        </section>

        <section>
          <h6 className="mb-4 text-sm font-black tracking-wide text-white">PAGES</h6>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-400">
            <a className="transition hover:text-white" href="#">Home</a>
            <a className="transition hover:text-white" href="#">Men</a>
            <a className="transition hover:text-white" href="#">About</a>
            <a className="transition hover:text-white" href="#">Accessories</a>
            <a className="transition hover:text-white" href="#">Women</a>
            <a className="transition hover:text-white" href="#">Contact</a>
          </div>
        </section>

        <section>
          <h6 className="mb-4 text-sm font-black tracking-wide text-white">CONTACTO</h6>
          <div className="space-y-3 text-sm text-slate-400">
            <p className="flex items-start gap-2">
              <GeoAltFill className="mt-0.5 min-w-4" />
              C. Libertad 514, Zona Centro, 31000 Chihuahua, Chih.
            </p>
            <p className="flex items-start gap-2">
              <EnvelopeFill className="mt-0.5 min-w-4" />
              phoneplanet323@gmail.com
            </p>
            <p className="flex items-start gap-2">
              <PhoneFill className="mt-0.5 min-w-4" />
              +52 639 117 6171
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
