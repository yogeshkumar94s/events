import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className='border-t'>
        <div className='flex-center wrapper flex-between flex-container flex-col gap-4 p-5 text-center sm:flex-row'>
          <Link href='/'>
            <Image
              alt='logo'
              src='/assets/images/logo.svg'
              width={138}
              height={38}
            />
          </Link>
          <p>2024 Events. All right reserved!</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
