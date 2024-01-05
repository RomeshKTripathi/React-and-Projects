import React from "react";

const UserContext = React.createContext();

export default UserContext;

// we creates a Provider of contxt 
/**
 * 
 * <UserContext>
 *  <App/>
 *  <UserLogin/>
 *  <Product />  all these components will have access to the UserContext Variables.
 * </UserContext
 * 
 * 
 */