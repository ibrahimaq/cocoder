import {ExclamationTriangleIcon} from '@heroicons/react/24/outline'
import { useEffect } from 'react';
import { usePostContext } from '../../context/PostContext';


const Error = () => {

  const {error, dispatch} = usePostContext();

  useEffect(() => {
    
    return dispatch({type: 'ERROR', payload: null})
  }, [])

  return (
    <>
    {error && 
    <div
      className="bg-gray-800
    bg-opacity-20 fixed w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-11/12 md:w-1/2 bg-slate-50 p-4 shadow-md rounded-md fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col">
        <div className="mb-2 text-center">
          <ExclamationTriangleIcon className='w-10 h-10 mx-auto text-red-600' />
          <p className="text-md font-medium text-red-600">{error}</p>
        </div>
        <hr className="my-3" />
        <button onClick={() => dispatch({type: 'ERROR', payload: null})}  className="btn outline outline-1 outline-rose-500 rounded-sm">
            Cancel
          </button>
      </div>
    </div>
    }
    </>
  );
};

export default Error;
