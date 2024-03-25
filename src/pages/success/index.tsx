import Container from '@/components/container';
import Section from '@/components/section';
import { memo, useEffect } from 'react';

const Demo = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Home'>
      <Container>
        <Section>
          <div className='success'>
            <div>
              <div className='bg' />
              <div className='t0'>
                請於收到兌換簡訊後2週內至全台雅詩蘭黛專櫃體驗
                <br />
                加入LINE官方帳號並完成綁定
                <br />
                即可獲得【膠原雙星體驗組】
                <br />
                <div>
                  <span>*特潤超導全方位修護露1.5mlx1</span>
                  <span>*年輕無敵膠原霜1.5mlx1</span>
                </div>
              </div>
              <div className='t1'>
                <span>*各櫃點數量有限，每人限換乙次，限本人領取，兌完為止</span>
                <span>*恕不得與其他兌換活動重複領取</span>
                <span>*雅詩蘭黛保留活動變更及解釋權利</span>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
});
export default Demo;
