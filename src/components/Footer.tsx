import { Link } from "react-router-dom";
import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            geofast-games
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.tiktok.com/@geofast_"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              TikTok
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.instagram.com/geofast_/"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.youtube.com/@geofast_"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
           <div>
            <a
              rel="noreferrer noopener"
              href="https://play.google.com/store/apps/dev?id=7184241621050076321"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Play Store
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://play.google.com/store/apps/dev?id=7184241621050076321"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              App Store
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Privacy Policy</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <Link to="/privacy">Geofast: Battle of Nations</Link>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          <div>&copy; 2025 Geofast</div>
          <div>
            Landing page made by{" "}
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.linkedin.com/in/utkarshtrivedi/"
              className="text-primary transition-all border-primary hover:border-b-2"
            >
              Utkarsh Trivedi
            </a>
          </div>
        </h3>
      </section>
    </footer>
  );
};
