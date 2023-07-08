import React from 'react';

const Loader = () => {
    return (
        <div>
             <div className='w-full h-screen flex items-center justify-center'>
        <div className='spinner'>
          <button
            type='button'
            className='bg-indigo-500 text-white px-4 py-2 rounded-md flex items-center opacity-75 cursor-not-allowed'
            disabled
          >
            <svg
              className='animate-spin h-5 w-5 mr-3'
              viewBox='0 0 24 24'
            >
              {/* SVG spinner animation */}
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              />
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.418 0 8-3.582 8-8h-2c0 3.866-3.134 7-7 7s-7-3.134-7-7H0c0 4.418 3.582 8 8 8z'
              />
            </svg>
            Loading...
          </button>
        </div>
      </div>
        </div>
    );
};

export default Loader;