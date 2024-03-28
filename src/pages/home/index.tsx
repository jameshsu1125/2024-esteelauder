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
                <div className='t1'>
                  <span>獨家！膠原力雙修護8科技</span>
                  <span>激升x鎖住 珍貴膠原力</span>
                </div>
                <div className='t2'>
                  <span>
                    120<sub>%</sub>
                    <sup>3</sup>
                  </span>
                  <span>澎潤彈亮</span>
                </div>
                <div className='t3'>
                  <span>
                    -15
                    <sub>%</sub>
                    <sup>3</sup>
                  </span>
                  <span>一夜撫紋</span>
                </div>
                <div className='t4'>
                  <span>全新 膠原藍霜</span>
                  <span>年輕無敵一夜修護膠原霜</span>
                </div>
                <div className='t5'>
                  <span>1 32位亞洲女性使用產品一次後之感官試驗結果，實際效果因人而異</span>
                  <span>2 28位亞洲女性使用產品一次，4小時後之臨床實驗結果</span>
                  <span>3 25位亞洲女性使用產品一次之臨床實驗結果</span>
                </div>
                <div className='t6'>
                  <a
                    href='https://www.esteelauder.com.tw/product/681/127822/product-catalog/revitalizing-supreme?size=75ml?utm_medium=referral&utm_source=online&utm_campaign=product_engagement&utm_content=brand-supreme-mpp_2403&utm_term=brand'
                    target='_blank'
                  >
                    <button>立即購買</button>
                  </a>
                  <a href='#form_iframe'>
                    <button>免費兌換</button>
                  </a>
                </div>
              </div>
            </div>
            <div className='section-1'>
              <div>
                <div className='bg'></div>
                <div className='t0'>
                  <div>
                    第1型膠原蛋白
                    <div>
                      <img src='data:image/png;base64,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' />
                      緊緻輪廓
                    </div>
                  </div>
                  <div>支撐臉部肌膚的重要結構網絡</div>
                  <label>
                    <input type='checkbox' />
                    <div className='open'></div>
                    <div className='dialog'>
                      <div>緊緻輪廓</div>
                      <div>支撐臉部肌膚的重要結構網絡</div>
                    </div>
                    <div className='close'></div>
                  </label>
                </div>
                <div className='t1'>
                  <div>
                    第3型膠原蛋白
                    <div>
                      <img src='data:image/png;base64,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' />
                      增加彈性
                    </div>
                  </div>
                  <div>掌控及提升肌膚結構網絡彈性</div>
                  <label>
                    <input type='checkbox' />
                    <div className='open'></div>
                    <div className='dialog'>
                      <div>增加彈性</div>
                      <div>掌控及提升肌膚結構網絡彈性</div>
                    </div>
                    <div className='close'></div>
                  </label>
                </div>
                <div className='t2'>
                  <div>
                    第5型膠原蛋白
                    <div>
                      <img src='data:image/png;base64,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' />
                      柔嫩細緻
                    </div>
                  </div>
                  <div>確保第1型與第3型膠原蛋白緊密排列</div>
                  <label>
                    <input type='checkbox' />
                    <div className='open'></div>
                    <div className='dialog'>
                      <div>柔嫩細緻</div>
                      <div>確保第1型與第3型膠原蛋白緊密排列</div>
                    </div>
                    <div className='close'></div>
                  </label>
                </div>
                <div className='t3'>
                  <div className='h0'>
                    <div>隨著歲月增長</div>
                    <div>膠原蛋白逐年遞減1%</div>
                  </div>
                  <div className='h1'>
                    <div>膠原蛋白會隨著年紀自然遞減</div>
                    <div>開始產生細紋、鬆垮與缺乏彈性等問題</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='section-2'>
              <div>
                <div className='bg'></div>
                <div className='t0'>激升膠原力</div>
                <div className='t1'>
                  夜間膠原力
                  <br />
                  雙修護8科技
                </div>
                <div className='t2'>鎖住膠原力</div>
                <div className='m-0'>
                  <label>
                    <input type='checkbox' />
                    <div className='open' />
                    <div className='dialog'>
                      <h1>激升膠原力</h1>
                      <hr />
                      激升關鍵第1,3,5型
                      <br />
                      膠原蛋白作用力
                    </div>
                    <div className='close'></div>
                  </label>
                </div>
                <div className='m-1'>
                  <label>
                    <input type='checkbox' />
                    <div className='open' />
                    <div className='dialog'>
                      <h1>
                        夜間膠原力
                        <br />
                        雙修護8科技
                      </h1>
                      <hr />
                      完美結合8種協同膠原蛋
                      <br />
                      白作用成分，激升肌膚澎
                      <br />
                      彈力，拉提與緊緻
                    </div>
                    <div className='close'></div>
                  </label>
                </div>
                <div className='m-2'>
                  <label>
                    <input type='checkbox' />
                    <div className='open' />
                    <div className='dialog'>
                      <h1>鎖住膠原力</h1>
                      <hr />
                      掌握預防膠原力
                      <br />
                      流失3大因子
                    </div>
                    <div className='close'></div>
                  </label>
                </div>
              </div>
            </div>
            <div className='section-3'>
              <div>
                <div className='bg'></div>
                <div className='t0'>激升膠原力</div>
                <div className='t1'>鎖住膠原力</div>
                <div className='t2'>
                  掌握預防
                  <br />
                  膠原力流失3大因子
                </div>
                <div className='t3'>
                  減少
                  <br />
                  <span>
                    74
                    <sub>%</sub>
                  </span>
                  <br />
                  肌膚氧化<sup>3</sup>
                </div>
                <div className='t4'>
                  減少
                  <br />
                  <span>
                    26
                    <sub>%</sub>
                  </span>
                  <br />
                  肌膚刺激<sup>3</sup>
                </div>
                <div className='t5'>
                  減少
                  <br />
                  <span>
                    35
                    <sub>%</sub>
                  </span>
                  <br />
                  膠原力流失<sup>4</sup>
                </div>
                <div className='t6'>
                  突破性「雙重奶霜彈潤質地」
                  <br />
                  一抹即融！無敵輕盈不黏膩，日夜皆適合!
                </div>
                <div className='t7'>
                  1
                  產品中奇蹟辣木、白芙蓉8大精萃與膠原協同激活科技三種配方相互作用下，相較於未使用之對照組，經48小時後之實驗結果。
                  <br />
                  2
                  產品中奇蹟辣木、白芙蓉8大精萃與膠原協同激活科技三種配方相互作用下，相較於未使用之對照組，經96小時後之實驗結果。
                  <br />
                  3 產品中維他命E配方作用下， 相較於未使用之對照組，經24小時後之實驗結果。
                  <br />4
                  產品中奇蹟辣木、藻類萃取、聖保羅草萃取、維他命E配方相互作用下，相較於未使用之對照組，經24小時後之實驗結果。
                </div>
                <div className='video'>
                  <video controls autoPlay playsInline muted loop>
                    <source
                      src='https://www.esteelauder.com.tw/media/export/cms/2403S+ANR//video.mp4'
                      type='video/mp4'
                    />
                  </video>
                </div>
              </div>
            </div>
            <div className='section-4'>
              <div>
                <div className='bg'></div>
                <div className='t0'>
                  <span>
                    -15<sub>%</sub>
                  </span>
                  <br />
                  一夜撫紋<sup>1</sup>
                </div>
                <div className='t1'>
                  <span>
                    +13<sub>%</sub>
                  </span>
                  <br />
                  恢復彈性<sup>3</sup>
                </div>
                <div className='t2'>
                  <span>
                    +20<sub>%</sub>
                  </span>
                  <br />
                  肌膚透亮<sup>1</sup>
                </div>
                <div className='t3'>
                  <span>
                    +96<sub>%</sub>
                  </span>
                  <br />
                  更加緊緻<sup>4</sup>
                </div>
                <div className='t4'>
                  <span>
                    +26<sub>%</sub>
                  </span>
                  <br />
                  肌膚透亮<sup>5</sup>
                </div>
                <div className='t5'>
                  <span>
                    +198<sub>%</sub>
                  </span>
                  <br />
                  潤澤乾紋<sup>2</sup>
                </div>
                <div className='t6'>
                  <span>
                    +22<sub>%</sub>
                  </span>
                  <br />
                  修護肌膚
                  <br />
                  屏障<sup>6</sup>
                </div>
                <div className='t7'>
                  <span>
                    +90<sub>%</sub>
                  </span>
                  <br />
                  看起來更
                  <br />
                  有活力
                  <sup>7</sup>
                </div>
                <div className='t8'>#膠原藍霜</div>
                <div className='t9'>#小棕瓶</div>
                <div className='t10'>
                  <a
                    href='https://www.esteelauder.com.tw/product/681/127822/product-catalog/revitalizing-supreme?size=75ml?utm_medium=referral&utm_source=online&utm_campaign=product_engagement&utm_content=brand-supreme-mpp_2403&utm_term=brand'
                    target='_blank'
                  >
                    <button>立即購買</button>
                  </a>
                </div>
                <div className='t11'>
                  <a
                    href='https://www.esteelauder.com.tw/product/681/77491/product-catalog/advanced-night-repair-serum/synchronized-multi-recovery-complex'
                    target='_blank'
                  >
                    <button>立即購買</button>
                  </a>
                </div>
                <div className='t12'>
                  1 25位亞洲女性使用產品一次之臨床實驗結果。
                  <br />
                  2 經34位亞洲女性立即使用產品後臨床實驗結果
                  <br />
                  3 28位亞洲女性使用產品一次之臨床實驗結果。
                  <br />
                  4 132位亞洲女性使用產品一次，四周後之感官試驗結果，實際效果因人而異。
                  <br />
                  5 29位亞洲女性使用產品一次之臨床實驗結果。
                  <br />
                  6 23位亞洲女性使用產品一次，2小時後之臨床實驗結果。
                  <br />7 301位亞洲女性使用產品一天2次，一周後之感官試驗結果，實際效果因人而異。
                </div>
              </div>
            </div>
            <div className='section-5'>
              <div>
                <div className='bg'></div>
                <div className='t0'>24hr膠原力修護不間斷</div>
                <div className='t1'>拉提3大關鍵區域</div>
                <div className='t2'>
                  4hr澎潤Q彈<sup>1</sup>
                </div>

                <div className='t3'>保濕初老乳霜</div>
                <div className='t4'>
                  全膚質適用
                  <br />
                  尤其初老症狀
                </div>
                <div className='t5'>
                  激升膠原力
                  <br />
                  三區拉提
                </div>
                <div className='t6'>
                  激升第1型
                  <br />
                  膠原蛋白協同作用
                </div>
                <div className='t7'>
                  雲朵輕盈質地
                  <br />
                  早晚適用
                </div>

                <div className='t8'>潤澤抗老撫紋霜</div>
                <div className='t9'>
                  全膚質適用
                  <br />
                  尤其乾肌／老化肌
                </div>
                <div className='t10'>
                  激升x鎖住膠原力
                  <br />
                  緊緻撫紋
                </div>
                <div className='t11'>
                  激升第1,3,5型
                  <br />
                  膠原蛋白協同作用
                </div>
                <div className='t12'>
                  雙重奶霜質地
                  <br />
                  早晚適用
                </div>
                <div className='t13'>夜間使用效果加強</div>
                <div className='t14'>
                  <a
                    href='https://www.esteelauder.com.tw/product/688/101138/product-catalog/revitalizing-supreme-moisturizer/youth-power-soft-creme'
                    target='_blank'
                  >
                    <button>立即購買</button>
                  </a>
                </div>
                <div className='t15'>
                  <a
                    href='https://www.esteelauder.com.tw/product/681/127822/product-catalog/revitalizing-supreme?size=75ml?utm_medium=referral&utm_source=online&utm_campaign=product_engagement&utm_content=brand-supreme-mpp_2403&utm_term=brand'
                    target='_blank'
                  >
                    <button>立即購買</button>
                  </a>
                </div>
                <div className='t16'>1 28位亞洲女性使用產品一次，4小時後之臨床實驗結果。</div>
                <div className='hash0'>#無敵膠原霜</div>
                <div className='hash1'>#膠原藍霜</div>
              </div>
            </div>
            <div className='section-6'>
              <div>
                <div className='bg'></div>
                <div className='t0'>清潔養膚</div>
                <div className='t1'>保濕打底</div>
                <div className='t2'>修護/舒敏</div>
                <div className='t3'>亮眼有神</div>
                <div className='t4'>封存年輕</div>
                <div className='h0'>
                  特潤超導三效
                  <br />
                  卸妝精萃膏
                </div>
                <div className='h1'>
                  微分子肌底原生露
                  <br />
                  (原生露/櫻花水)
                </div>
                <div className='h2'>
                  特潤超導全方位修護露
                  <br />
                  特潤超導舒敏奇肌安瓶
                </div>
                <div className='h3'>
                  特潤冰導緊緻眼部精華
                  <br />
                  特潤全能修護亮眼霜
                </div>
                <div className='h4'>
                  年輕無敵一夜修護膠原霜
                  <br />
                  年輕無敵膠原霜
                </div>
                <div className='b0'>
                  <a
                    href='https://www.esteelauder.com.tw/product/681/117065/product-catalog/advanced-night-cleansing-balm-with-lipid-rich-oilinfusion/cleanser-with-lipid-rich-oil-infusion?size=70ml?utm_medium=referral&utm_source=online&utm_campaign=product_engagement&utm_content=brand-supreme-mpp_2403&utm_term=brand'
                    target='_blank'
                  >
                    <button>立即購買</button>
                  </a>
                </div>
                <div className='b1'>
                  <a
                    href='https://www.esteelauder.com.tw/micro-essence-skin/?utm_medium=referral&utm_source=online&utm_campaign=product_engagement&utm_content=brand-supreme-mpp_2403&utm_term=brand'
                    target='_blank'
                  >
                    <button>立即購買</button>
                  </a>
                </div>
                <div className='b2'>
                  <a
                    href='https://www.esteelauder.com.tw/products/26390/product-catalog/skin-care/skin-care-collections/advanced-night-repair ?utm_medium=referral&utm_source=online&utm_campaign=product_engagement&utm_content=brand-supreme-mpp_2403&utm_term=brand'
                    target='_blank'
                  >
                    <button>立即購買</button>
                  </a>
                </div>
                <div className='b3'>
                  <a
                    href='https://www.esteelauder.com.tw/products/26390/product-catalog/skin-care/skin-care-collections/advanced-night-repair?utm_medium=referral&utm_source=online&utm_campaign=product_engagement&utm_content=brand-supreme-mpp_2403&utm_term=brand'
                    target='_blank'
                  >
                    <button>立即購買</button>
                  </a>
                </div>
                <div className='b4'>
                  <a
                    href='https://www.esteelauder.com.tw/products/26396/product-catalog/skin-care/skin-care-collections/revitalizing-supreme ?utm_medium=referral&utm_source=online&utm_campaign=product_engagement&utm_content=brand-supreme-mpp_2403&utm_term=brand'
                    target='_blank'
                  >
                    <button>立即購買</button>
                  </a>
                </div>
              </div>
            </div>
            <div className='section-7'>
              <div>
                <div className='bg'></div>
                <div className='t0'>
                  <span>$4,380</span>
                  <div>價值$8,935</div>
                </div>
                <div className='t1'>
                  <span>$5,280</span>
                  <div>價值$7,242</div>
                </div>
                <div className='b0'>
                  <a
                    href='https://line.esteelauder.com.tw/OnlineShop/preorder?utm_medium=referral&utm_source=online&utm_campaign=product_engagement&utm_content=brand-supreme-mpp_2403&utm_term=brand'
                    target='_blank'
                  >
                    <button>線上點線下取</button>
                  </a>
                </div>
                <div className='c0'>
                  <a
                    href='https://www.esteelauder.com.tw/product/13777/128888/promotions/setsgifts/advanced-night-repair?utm_medium=referral&utm_source=online&utm_campaign=product_engagement&utm_content=brand-supreme-mpp_2403&utm_term=brand'
                    target='_blank'
                  >
                    <button>官網直購</button>
                  </a>
                </div>
                <div className='b1'>
                  <a
                    href='https://line.esteelauder.com.tw/OnlineShop/preorder?utm_medium=referral&utm_source=online&utm_campaign=product_engagement&utm_content=brand-supreme-mpp_2403&utm_term=brand'
                    target='_blank'
                  >
                    <button>線上點線下取</button>
                  </a>
                </div>
                <div className='c1'>
                  <a
                    href='https://www.esteelauder.com.tw/product/681/127822/product-catalog/revitalizing-supreme?size=75ml?utm_medium=referral&utm_source=online&utm_campaign=product_engagement&utm_content=brand-supreme-mpp_2403&utm_term=brand'
                    target='_blank'
                  >
                    <button>官網直購</button>
                  </a>
                </div>
                <div className='f0'>母親節特惠組數量有限，售完為止。</div>
              </div>
            </div>
            <div className='section-8'>
              <div>
                <div className='bg'></div>
                <div className='t0'>
                  特潤超導全方位修護露1.5mlx1
                  <br />
                  年輕無敵膠原霜1.5mlx1
                </div>
                <div className='t1'>
                  即日起至5/12
                  <br />
                  填單後至全台雅詩蘭黛專櫃體驗
                  <br />
                  加入LINE官方帳號並完成綁定
                  <br />
                  即可獲得【膠原雙星體驗組】
                </div>
                <div className='t2'>
                  *各櫃點數量有限，每人限換乙次，限本人領取，兌完為止
                  <br />
                  *恕不得與其他兌換活動重複領取
                  <br />
                  *雅詩蘭黛保留活動變更及解釋權利
                </div>
              </div>
            </div>
            <div id='form_iframe'></div>
          </Section>
        </Container>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
