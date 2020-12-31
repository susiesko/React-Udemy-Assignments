import React from 'react';

const authContext = React.createContext({
  authenticated: false, 
  toggleLogin: () => {}
});

export default authContext;