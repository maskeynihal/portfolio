import React from 'react';
import Head from 'next/head';
import { BsCodeSlash } from 'react-icons/bs';
import { MdNavigateNext } from 'react-icons/md';
import { RiErrorWarningFill } from 'react-icons/ri';
import { SiLinkedin, SiFacebook, SiGithub, SiInstagram, SiTwitter } from 'react-icons/si';

import CurveLine from '~/icons/curveLine';

import {
  Glow,
  GradientCircle,
  Laravel,
  Line,
  Php,
  Python,
  Javascript,
  Git,
  Sql,
  NodeJs,
  ReactJs,
  Vue
} from '~/icons/index';

const skills = [<Php />, <Javascript />, <Python />, <Git />, <Sql />, <Laravel />, <NodeJs />, <ReactJs />, <Vue />];
const projects = [
  {
    name: 'Market Watch',
    tags: ['JavaScript'],
    description: 'Pacman game with multiplayer using shortest distance algorithm.',
    links: {
      demo: 'https://maskeynihal.github.io/pacman/',
      code: 'https://github.com/maskeynihal/pacman'
    }
  },
  {
    name: 'Flappy Bird',
    tags: ['JavaScript'],
    description: 'Recreation of Flappy bird game using vanilla JS.',
    links: {
      demo: 'https://maskeynihal.github.io/flappy-bird/',
      code: 'https://github.com/maskeynihal/flappy-bird'
    }
  },
  {
    name: 'Web Design',
    tags: ['HTML', 'CSS'],
    description: 'Responsive Web Design.',
    links: {
      demo: 'https://maskeynihal.github.io/fooseshoes/',
      code: 'https://github.com/maskeynihal/fooseshoes'
    }
  }
];

interface SocialLink {
  icon: Function;
  link: string;
}

const socials: Array<SocialLink> = [
  {
    icon: (props) => <SiLinkedin {...props} />,
    link: 'https://www.linkedin.com/in/maskeynihal'
  },
  {
    icon: (props) => <SiFacebook {...props} />,
    link: 'https://www.facebook.com/nihalmaskey'
  },
  {
    icon: (props) => <SiGithub {...props} />,
    link: 'https://www.github.com/maskeynihal'
  },
  {
    icon: (props) => <SiInstagram {...props} />,
    link: 'https://www.instagram.com/nihalmaskey'
  },
  {
    icon: (props) => <SiTwitter {...props} />,
    link: 'https://www.twitter.com/nihalmaskey'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <meta name="title" content="Nihal Maskey" />
        <meta name="description" content="Portfolio website of Nihal Maskey" />
        <meta
          name="keywords"
          content="Software Engineer, Nihal Maskey, Nepal, Computer Engineering Student, Software Developer, Web Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />
        <meta name="author" content="Nihal Maskey" />

        <title>Nihal Maskey</title>
      </Head>
      <div className="flex justify-center items-center relative w-100 h-screen">
        <div className="absolute top-0 left-0">
          <Glow />
        </div>
        <div className="fixed p-4 top-0 right-5 flex justify-around">
          <RiErrorWarningFill />
          <small className="pl-4">This site is still in progress and is not responsive.</small>
        </div>
        <div className="flex items-center">
          <div className="text-6xl pr-4 mb-2">Nihal Maskey</div>
          <Line />
          <div className="text-5xl pl-4 mt-2">Software Engineer</div>
        </div>

        <div className="absolute w-full top-full transform -translate-y-3/4">
          <CurveLine />
        </div>
      </div>

      <div className="container mx-auto px-8">
        <div className=" text-center pt-32 px-32">I am a Software Engineer.</div>

        <div className="">
          <div className="flex items-center justify-center pt-64 pb-32">
            <GradientCircle />
            <div className="text-4xl font-semibold -ml-8 pt-4">SKILLS</div>
          </div>

          <div className="grid grid-cols-5 gap-4 items-center">
            {skills.map((SkillLogo) => (
              <div className="py-8 justify-self-center">{SkillLogo}</div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="flex items-center justify-center pt-64 pb-32">
            <GradientCircle />
            <div className="text-4xl font-semibold -ml-8 pt-4">PROJECTS</div>
          </div>

          <div className="flex gap-32 justify-between">
            {projects.map((project) => (
              <div className="rounded-xl border-main-primary border w-2/3" key={project.name}>
                <div className="px-8 py-8 text-center">
                  <div className="text-2xl font-semibold">{project.name}</div>
                  <div className="font-normal italic text-lg text-gray-500 pt-2">{project.tags.join(', ')}</div>
                  <div className="py-8">{project.description}</div>
                  <div className="flex pt-4 justify-around">
                    <a
                      className="px-6 py-2 flex justify-center items-center rounded-full bg-gradient-to-b from-main-accent-dark to-main-accent-light"
                      href={project.links.demo}
                    >
                      <BsCodeSlash />
                    </a>
                    <a
                      className="px-4 py-2 flex justify-center items-center rounded-full bg-gradient-to-b from-main-accent-dark to-main-accent-light"
                      href={project.links.code}
                    >
                      CODE
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            className="flex justify-end items-center text-right py-8 text-gray-400 italic"
            href="https://github.com/maskeynihal"
          >
            <span className="pr-2">See More</span>
            <MdNavigateNext size={30} />
          </a>
        </div>
      </div>
      <footer className="py-4">
        <div className="flex pt-32 justify-center">
          {socials.map(({ icon: Icon, link }) => (
            <div className="py-2 px-4" key={link}>
              <a href={link} target="_blank" rel="noreferrer">
                <Icon size={30} />
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-8">
          <small>&copy; Copyright 2021, Nihal Maskey</small>
        </div>
      </footer>
    </>
  );
}
