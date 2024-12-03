import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#006fee] text-white py-8 mt-8">
      <div className="container px-10 flex flex-col md:flex-row justify-between items-center">
        <Link href="/">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Baby Name Nestlings</h2>
          </div>
        </Link>

        <div className="flex  space-x-4">
          &copy; {currentYear} All Rights Reserved
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <p>Follow Us</p>
          <a
            href="https://www.facebook.com/profile.php?id=61563565883613&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-400"
          >
            <FacebookIcon
              sx={{ color: "#006fee", background: "white" }}
              className="rounded-md"
            />
          </a>
          <a
            href="https://x.com/namenestlings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-400"
          >
            <Twitter
              sx={{ color: "#bc002d", background: "white" }}
              className="rounded-md"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/babynamenestlings/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-400"
          >
            <LinkedInIcon
              sx={{ color: "#006fee", background: "white" }}
              className="rounded-md"
            />
          </a>
        </div>

        <div className="flex mt-4 md:mt-0 gap-2">
          <Link href="/about">
            <p className="underline">About</p>
          </Link>
          <Link href="/privacy">
            <p className="underline">Privacy</p>
          </Link>
          <Link href="/contact">
            <p className="underline">Contact</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
