// import AndroidIcon from '@mui/icons-material/Android';
// import AppleIcon from '@mui/icons-material/Apple';
// import DescriptionIcon from '@mui/icons-material/Description';
// import EmailIcon from '@mui/icons-material/Email';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import PlayIcon from '@mui/icons-material/PlayArrowOutlined';
// import { IconButton, Tooltip } from '@mui/material';
import { Github, Linkedin, Mail, Play, StickyNote } from 'lucide-react';
import React, { useCallback } from 'react';

type IconButtonBarProps = {
  links: {
    post: string;
    github: string;
    googlePlay: string;
    appStore: string;
    demo: string;
  };
};

const IconButtonBar: React.FC<IconButtonBarProps> = ({ links = {} }) => {
  const IconPicker = useCallback((icon: string) => {
    const props = { className: 'icon', width: 20, height: 20 };
    switch (icon) {
      case 'post':
        return <StickyNote {...props} />;
      case 'demo':
        return <Play {...props} />;
      case 'github':
        return <Github {...props} />;
      case 'googlePlay':
        return null;
      // return <Android {...props} />;
      case 'appStore':
        return null;
      // return <AppleIcon {...props} />;
      case 'email':
        return <Mail {...props} />;
      case 'linkedIn':
        return <Linkedin {...props} />;
      default:
        return <></>;
    }
  }, []);

  return (
    <>
      {Object.keys(links).map((link, index) => {
        return IconPicker(link);
      })}
    </>
  );
};

export default IconButtonBar;
