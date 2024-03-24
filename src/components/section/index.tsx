import { memo, useEffect } from 'react';
import { IReactProps } from '@/settings/type';

const Section = memo(({ children }: IReactProps) => {
  useEffect(() => {}, []);
  return <section className='Section'>{children}</section>;
});
export default Section;
