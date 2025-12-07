// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Image from "next/image";
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] text-white">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="py-8 lg:py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#1b203e] border border-[#1d293a] rounded-lg p-6 hover:border-[#464c6a] contact-card-glow text-center group">
              <div className="flex justify-center mb-4">
                <MdAlternateEmail
                  className="bg-[#8b98a5] p-3 rounded-full group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300 text-gray-800"
                  size={40}
                />
              </div>
              <h3 className="text-[#16f2b3] font-semibold mb-2 transition-colors">Email</h3>
              <a 
                href={`mailto:${personalData.email}`}
                className="text-sm text-gray-300 break-all"
              >
                {personalData.email}
              </a>
            </div>

            <div className="bg-[#1b203e] border border-[#1d293a] rounded-lg p-6 hover:border-[#464c6a] contact-card-glow text-center group">
              <div className="flex justify-center mb-4">
                <IoMdCall
                  className="bg-[#8b98a5] p-3 rounded-full group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300 text-gray-800"
                  size={40}
                />
              </div>
              <h3 className="text-[#16f2b3] font-semibold mb-2 ">Phone</h3>
              <a 
                href={`tel:${personalData.phone}`}
                className="text-sm text-gray-300"
              >
                {personalData.phone}
              </a>
            </div>

            <div className="bg-[#1b203e] border border-[#1d293a] rounded-lg p-6 hover:border-[#464c6a] contact-card-glow text-center group">
              <div className="flex justify-center mb-4">
                <CiLocationOn
                  className="bg-[#8b98a5] p-3 rounded-full group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300 text-gray-800"
                  size={40}
                />
              </div>
              <h3 className="text-[#16f2b3] font-semibold mb-2 transition-colors">Location</h3>
              <p className="text-sm text-gray-300">
                {personalData.address}
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 text-[#16f2b3]">Connect with me</h3>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <Link target="_blank" href={personalData.github} className="group">
                <IoLogoGithub
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.linkedIn} className="group">
                <BiLogoLinkedin
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.twitter} className="group">
                <FaXTwitter
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.stackOverflow} className="group">
                <FaStackOverflow
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.facebook} className="group">
                <FaFacebook
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;