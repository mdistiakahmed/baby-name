import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Gender Names", href: "/gender" },
        { name: "Religious Names", href: "/religion" },
        { name: "Country Names", href: "/country" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" }
      ]
    },
    {
      title: "Explore Names",
      links: [
        { name: "Zulu Names", href: "/articles/zulu-baby-names-a-to-z-unique-and-meaningful-names-for-every-letter-of-the-alphabet" },
        { name: "Xhosa Names", href: "/articles/unique-and-beautiful-xhosa-baby-names-for-your-little-one" },
        { name: "Flower Names", href: "/articles/beautiful-baby-girl-names-inspired-by-flowers" },
        { name: "Vintage Names", href: "/articles/the-best-vintage-baby-names-with-meaning" }
      ]
    }
  ];

  return (
    <footer 
      className="bg-gradient-to-br from-[#f06246] to-[#006fee] text-white py-16"
      aria-label="Website Footer"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-full md:col-span-1">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold">BabyNameNestlings</h2>
          </div>
          <p className="text-sm opacity-80 mb-6">
            Discover meaningful baby names that reflect your heritage, culture, and values.
          </p>
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            {[
              { Icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61563565883613" },
              { Icon: FaTwitter, href: "https://x.com/namenestlings" },
             // { Icon: FaInstagram, href: "https://instagram.com/babynamenestlings" },
              { Icon: FaLinkedin, href: "https://linkedin.com/company/babynamenestlings" }
            ].map(({ Icon, href }, index) => (
              <Link 
                key={index} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors duration-300"
                aria-label={`Follow us on ${Icon.name}`}
              >
                <Icon size={24} />
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-white/20">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link 
                    href={link.href} 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-white transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright and AdSense Disclaimer */}
      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-white/20 text-center">
        <p className="text-sm opacity-70">
          © {currentYear} BabyNameNestlings. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;