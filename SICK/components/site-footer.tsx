import { FaInstagram, FaFacebookF, FaTwitter, FaRedditAlien } from "react-icons/fa";
import Link from "next/link";

const footerSocials = [
  {
    href: "https://www.instagram.com/yourhandle",
    name: "Instagram",
    icon: <FaInstagram className="h-8 w-8" />,
  },
  {
    href: "https://www.facebook.com/yourhandle",
    name: "Facebook",
    icon: <FaFacebookF className="h-8 w-8" />,
  },
  {
    href: "https://twitter.com/yourhandle",
    name: "Twitter",
    icon: <FaTwitter className="h-8 w-8" />,
  },
  {
    href: "https://www.reddit.com/user/yourhandle",
    name: "Reddit",
    icon: <FaRedditAlien className="h-8 w-8" />,
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-zinc-100">
      <div className="mx-auto w-full max-w-screen-xl px-8 py-16">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8">
            {footerSocials.map((social) => (
              <div key={social.name} className="flex flex-col items-center">
                <Link
                  href={social.href}
                  className="text-zinc-900 hover:text-zinc-700 fill-current"
                >
                  {social.icon}
                </Link>
                <span className="mt-2 text-sm text-zinc-900">
                  {social.name}
                </span>
              </div>
            ))}
          </div>
          <span className="text-sm text-zinc-700 text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer font-semibold text-zinc-900">
              SICK
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
