import React, { useEffect, useState } from 'react';
import styles from '../../public/assets/css/AppLayout.module.css';
import Image from 'next/image';
import MainButton from './MainButton';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import useIsMobile from '../hooks/useIsMobile';

const AppLayout = ({ children }) => {
  const [showNav, setShowNav] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    !isMobile ? setShowNav(true) : setShowNav(false);
  }, [isMobile]);
  return (
    <>
      <div class="page">
        <nav>nav</nav>
        <aside className="flex flex-col justify-between px-[40px] pt-[45px] uppercase">
          <div className="flex flex-col text-center">
            <div class={`${styles.me} bg-[url('/assets/img/me.jpg')]`}></div>
            <h2 className="text-[22px] font-[500] uppercase">Abdulaziz Omar</h2>
            <p className="text-[16px]">Full-Stack Web Developer</p>
          </div>

          <div className="flex items-center justify-between py-[20px]">
            <div className="flex flex-col text-[rgba(255,255,255,.5)] uppercase">
              <p className="text-[16px]  mb-[5px]">Get In Touch</p>
              <div className="flex w-[150px] justify-between">
                <FiMail size={'2em'} />
                <FaGithub size={'2em'} />
                <FaLinkedin size={'2em'} />
                <SiUpwork size={'2em'} />
              </div>
            </div>
            {isMobile && (
              <div
                onClick={() => setShowNav(false)}
                className={`${!showNav && 'hidden'} self-end py-[20px]`}
              >
                <AiOutlineClose size={'1.5em'} />
              </div>
            )}
            {isMobile && !showNav && (
              <div
                onClick={() => setShowNav(true)}
                className={`${
                  showNav || (!isMobile && 'hidden')
                } self-end py-[20px]`}
              >
                <AiOutlineMenu size={'1.5em'} />
              </div>
            )}
          </div>
          {showNav && (
            <>
              <div className="flex flex-col text-[rgba(255,255,255,.5)]">
                <div className="py-[20px]">What I offer</div>
                <div className="py-[20px]">Portfolio</div>
                <div className="py-[20px]">Download my CV</div>
                <div className="py-[20px]">Contact Me</div>
              </div>
            </>
          )}
        </aside>
        <section className="px-[2rem] py-[4rem]">
          <div className="flex flex-col pt-[7rem]">
            <h1 className="text-[3em] font-[500]">Hi, I'm Abdulaziz,</h1>
            <p className="text-[2em] font-[200]">
              a freelance software engineer specialized in both front-end and
              back-end web development.
            </p>
          </div>
          <div className="flex flex-col w-[fit-content] min-h-[160px] justify-between mt-[2em]">
            <MainButton content={'what I Offer'} />
            <MainButton content={'Portfolio'} />
            <MainButton content={'CV'} />
          </div>
        </section>
      </div>
    </>
  );
};

export default AppLayout;
