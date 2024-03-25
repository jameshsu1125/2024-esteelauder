import Container from '@/components/container';
import Section from '@/components/section';
import { memo, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <Container>
          <Section>
            <div className='section-0'>
              <div>
                <div className='bg' />
                <div className='t0'>
                  <span>
                    96%一夜有感<sup>1</sup>
                  </span>
                  <span>
                    4hr啟動膠原回彈肌<sup>2</sup>
                  </span>
                </div>
              </div>
            </div>
            <div className='section-1'>
              <div>
                <div className='bg'></div>
              </div>
            </div>
            <div className='section-2'>
              <div>
                <div className='bg'></div>
              </div>
            </div>
            <div className='section-3'>
              <div>
                <div className='bg'></div>
              </div>
            </div>
            <div className='section-4'>
              <div>
                <div className='bg'></div>
              </div>
            </div>
            <div className='section-5'>
              <div>
                <div className='bg'></div>
              </div>
            </div>
            <div className='section-6'>
              <div>
                <div className='bg'></div>
              </div>
            </div>
            <div className='section-7'>
              <div>
                <div className='bg'></div>
              </div>
            </div>
            <div className='section-8'>
              <div>
                <div className='bg'></div>
              </div>
            </div>
          </Section>
        </Container>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
