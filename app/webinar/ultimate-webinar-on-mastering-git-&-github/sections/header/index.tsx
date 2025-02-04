"use client";
import Image from "next/image";
import Button from "../../components/button";
import { motion } from "framer-motion";
import Link from "next/link";
const Header = () => {
  return (
    <motion.header
      className="py-4 border-b border-white/20 md:border-none sticky top-0 z-10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{
        duration: 1.2, // Slow and smooth animation
        ease: [0.4, 0.0, 0.2, 1], // Custom smooth easing curve
      }}
    >
      <div className="container mx-auto pl-2 pr-2">
        <div className="flex justify-between items-center md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
          <div>
            <Link href={"/"}>
              <Image
                src="/SVG/logo/logo-icon.svg"
                alt="Logo"
                width={50}
                height={50}
                className="h-10 w-10"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="" className="text-white/70 hover:text-white transition">
                Company
              </a>
              <a href="" className="text-white/70 hover:text-white transition">
                Courses
              </a>
              <a href="" className="text-white/70 hover:text-white transition">
                Portal
              </a>
              <a href="" className="text-white/70 hover:text-white transition">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Enroll now</Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
