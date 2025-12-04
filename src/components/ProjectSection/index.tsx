import React from 'react';

import { Project } from '@/src/type';

import IconButtonBar from '../IconButtonBar';
import Image from '../Image';
import SectionHeader from '../SectionHeader';
import * as S from './styled';

type ProjectSectionProps = {
  projects?: Project[];
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  if (!projects || projects.length < 1) return null;

  return (
    <S.Wrapper>
      <SectionHeader title='Projects' />
      {projects.map((project, index) => (
        <div className='project' key={index}>
          <div className='head'>
            {project.title}&nbsp;&nbsp;
            {project.links && <IconButtonBar links={project.links} />}
          </div>
          <div className='body'>
            <Image className='thumbnail' src={project.thumbnailUrl} />

            {project.techStack && (
              <div className='tech-stack'>
                {project.techStack.map((tech, index) => (
                  <div key={index} className='tech'>
                    {tech}
                  </div>
                ))}
              </div>
            )}
            <div className='description'>{project.description}</div>
          </div>
        </div>
      ))}
    </S.Wrapper>
  );
};

export default ProjectSection;
