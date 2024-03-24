import { PAGE } from '@/settings/config';
import { Context } from '@/settings/constant';
import { ActionType, IReactProps } from '@/settings/type';
import { memo, useContext, useEffect } from 'react';

const Drawer = memo(({ children }: IReactProps) => {
  const [, setContext] = useContext(Context);
  useEffect(() => {}, []);
  return (
    <div className='drawer'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-start [&>*]:w-full'>
        {children}
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' aria-label='close sidebar' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
          {Object.entries(PAGE).map(([key, value]) => (
            <li key={key}>
              <a
                onClick={() => {
                  setContext({ type: ActionType.Page, state: PAGE[key as keyof typeof PAGE] });
                }}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
export default Drawer;
