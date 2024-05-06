const setSession = (key,value) => localStorage.setItem(key,value);
const getSession = (key)=> localStorage.getItem(key);
const removeSession = (key) => localStorage.removeItem(key);
const logoutUser = () => localStorage.clear();

export {setSession,getSession,removeSession,logoutUser};