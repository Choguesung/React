import { useState } from 'react';

function Page() {
  let [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className={'text-2xl'}>캐러샐</h1>
        <div className={'bg-slate-400 w-48 h-48 overflow-x-hidden'}>
          <div
            className={'flex transition ' + '-translate-x-[' + count + '00%]'}
          >
            <img src="/cat.jfif" alt="cat" className={'w-48 h-48'} />
            <img src="/dog.jfif" alt="dog" className={'w-48 h-48'} />
            <img src="/cat.jfif" alt="cat" className={'w-48 h-48'} />
          </div>
        </div>
        <button
          className={'w-12 bg-slate-400 rounded-xl'}
          onClick={() => {
            setCount(0);
          }}
        >
          0
        </button>
        <button
          className={'w-12 bg-slate-400 rounded-xl'}
          onClick={() => {
            setCount(1);
          }}
        >
          1
        </button>
        <button
          className={'w-12 bg-slate-400 rounded-xl'}
          onClick={() => {
            setCount(2);
          }}
        >
          2
        </button>
      </div>
    </>
  );
}

export default Page;
