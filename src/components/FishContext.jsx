import {createContext, useContext} from 'react';

const FishContext = createContext([]);

const useFish = () => useContext(FishContext);

export {FishContext, useFish};
export default FishContext;