import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#006fee] text-white py-8 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Baby Name Nestlings</h2>
          </div>
        </Link>

        <div className="flex  space-x-4">
          &copy; 1994 - {currentYear} All Rights Reserved
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <p>Follow Us</p>
          <a
            href="https://facebook.com"
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
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-400"
          >
            <YouTubeIcon
              sx={{ color: "#bc002d", background: "white" }}
              className="rounded-md"
            />
          </a>
          <a
            href="https://linkedin.com"
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
      </div>
    </footer>
  );
};

export default Footer;
