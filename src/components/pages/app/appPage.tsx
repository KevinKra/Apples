import React from 'react';
import styled from 'styled-components';
import styles from '../../../ui/baseline/variables';

const appPage = () => {
  return (
    <PageContainer>
      <NavigationBar>
        <p>Courses</p>
        <p>Sign in</p>
      </NavigationBar>
      <HeroContainer>
        <h3>Browse courses or create a course</h3>
        <button>Browse</button>
        <button>+ Create a Course</button>
      </HeroContainer>
      <ContentContainer>
        <p>Additional Content Here</p>
      </ContentContainer>
    </PageContainer>
  );
};

export default appPage;

const PageContainer = styled.div`
  border: 1px solid ${styles.color.blackInk};
  min-height: 100vh;
  padding: 0 1rem;
`;

const NavigationBar = styled.nav`
  border: 1px solid ${styles.color.blackInk};
  display: flex;
  justify-content: center;
`;

const VerticalContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroContainer = styled(VerticalContainer)`
  border: 1px solid ${styles.color.blackInk};
`;

const ContentContainer = styled(VerticalContainer)`
  border: 1px solid ${styles.color.blackInk};
`;
