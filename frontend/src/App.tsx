import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { CollectionList } from './components/collectionList';
import { fetchCollectionsThunk, selectAllCollections } from './slices/collectionSlice';

function App() {
  const dispatch = useDispatch();
  const collections = useSelector(selectAllCollections);

  useEffect(() => {
    dispatch(fetchCollectionsThunk());
  }, []);

  return (
    <div className="App">
      <CollectionList collections={collections} />
    </div>
  );
}

export default App;

// https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once