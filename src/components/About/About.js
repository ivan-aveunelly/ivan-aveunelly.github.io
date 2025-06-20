import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
       <div style={{ transform: 'translateY(-20px)' }}>
            <Avatar src="image.png" />
        </div>

        <p>
          Hi, I'm Ivan Aveunelly, a passionate, self-taught front-end developer from Perú.
           I currently work as a freelance front-end engineer. I've been developing web 
           content since 6th grade, have created countless side projects, and also possess 
           the ability to use React to build engaging user interfaces.
          <br />
          <br />I also love doing <b>open source</b> development, I actively
          maintain various notable open source projects .
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“Simplicity is the baddest choice to be the best.“</p>
        </Quote>
        <Quote>
          <p>
            “I know I’m not successful enough, but I’m passionate enough not to
            worry about success.“
          </p>
        </Quote>
        <Quote>
          <p>
            “Creativity is the driver of an unstoppable train called Passion.”
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
