import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchBlogsLoading,fetchBlogsSuccess,createBlog} from '../actions-creator';
// import {fetchBlog} from '../thunk'
export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators({fetchBlogsLoading,fetchBlogsSuccess,createBlog}, dispatch);
  }, []);
};
