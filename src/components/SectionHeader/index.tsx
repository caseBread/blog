import React from 'react';

import * as S from './styled';

type SectionHeaderProps = {
  title: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <S.Wrapper>
      <div className='section-header'>
        <h2>{title}</h2>
      </div>
    </S.Wrapper>
  );
};

export default SectionHeader;
