import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import hablamosImg from '../public/assets/projects/hablamos.png';
import techiImg from '../public/assets/projects/tachivation.png'
import pluginsthatknock from '../public/assets/projects/pluginsthatknock.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
         <ProjectItem
            title='Pluginsthatknock'
            backgroundImg={pluginsthatknock}
            projectUrl='/pluginsthatknock'
            tech='Next JS'

          />
          <ProjectItem
            title='Hablamos'
            backgroundImg={hablamosImg}
            projectUrl='/hablamos'
            tech='React JS'

          />
          <ProjectItem
            title='Techivation'
            backgroundImg={techiImg}
            projectUrl='/techivation'
            tech='Next JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
