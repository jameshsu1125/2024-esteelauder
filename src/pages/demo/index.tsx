import { memo, useEffect } from 'react';

const Demo = memo(() => {
  useEffect(() => {}, []);
  return <div className='Demo'>Demo</div>;
});
export default Demo;
