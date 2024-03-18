import { Context } from '@/settings/constant';
import { ActionType, IReactProps } from '@/settings/type';
import { ReactNode, memo, useContext, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { FaCopy } from 'react-icons/fa';

const Container = memo(({ children }: IReactProps) => {
  const [context, setContext] = useContext(Context);

  useEffect(() => {
    setContext({ type: ActionType.Node, state: children });
  }, [children]);

  return (
    <div className='w-full'>
      <div className='w-full bg-base-300 p-5'>
        <button
          className='btn btn-link uppercase'
          onClick={() => {
            const node = context[ActionType.Node];
            const html = ReactDOMServer.renderToString(node as unknown as ReactNode);
            navigator.clipboard.writeText(html);
            alert('copied');
          }}
        >
          <FaCopy />
          copy
        </button>
      </div>
      <div className='w-full flex justify-center'>
        <div className='w-full max-w-[1336px] bg-white text-black'>{children}</div>
      </div>
    </div>
  );
});
export default Container;
