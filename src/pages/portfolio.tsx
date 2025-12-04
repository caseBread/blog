import { graphql } from 'gatsby';
import React from 'react';

import ProjectSection from '../components/ProjectSection';
import Seo from '../components/Seo';
import Layout from '../layout';
import { SiteMetadata } from '../type';

type PortfolioProps = {
  data: {
    site: { siteMetadata: SiteMetadata };
  };
  location: Location;
};

const Portfolio: React.FC<PortfolioProps> = ({ location, data }) => {
  const metaData = data.site.siteMetadata;
  const { projects } = metaData;

  return (
    <Layout location={location}>
      <Seo title='개발자 김건우 | Portfolio' />
      <ProjectSection projects={projects} />
    </Layout>
  );
};

export default Portfolio;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        projects {
          title
          description
          techStack
          thumbnailUrl
          links {
            post
            github
            demo
            googlePlay
            appStore
          }
        }
      }
    }
  }
`;
