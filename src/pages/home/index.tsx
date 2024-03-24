import Container from '@/components/container';
import Section from '@/components/section';
import { memo, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <Container>
          <Section>
            <div className='w-full bg-black'></div>
          </Section>
        </Container>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
