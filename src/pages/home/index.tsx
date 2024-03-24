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
            <div className='section-0'>
              <div>1</div>
            </div>
            <div className='section-1'>
              <div>2</div>
            </div>
            <div className='section-2'>
              <div>3</div>
            </div>
            <div className='section-3'>
              <div>4</div>
            </div>
            <div className='section-4'>
              <div>5</div>
            </div>
            <div className='section-5'>
              <div>6</div>
            </div>
            <div className='section-6'>
              <div>7</div>
            </div>
            <div className='section-7'>
              <div>8</div>
            </div>
          </Section>
        </Container>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
