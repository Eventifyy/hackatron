'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles/style';
import { footerVariants } from '../utils/motion';
import Image from 'next/image';

const Footer = () => {
  return(

  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Book your Tickets
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#8A42D8] rounded-[32px] gap-[12px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Book Now
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* <h4 className="font-extrabold text-[24px] text-white">
            EVENTIFY
          </h4> */}
          <Image
          width={120}
          height={40}
          src='/logo.svg'
          />
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 Eventify. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
  )
}


export default Footer;
