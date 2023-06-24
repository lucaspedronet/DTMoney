import React, {createContext, useContext, useReducer} from 'react';
import {api} from '../services/api';

const AuthContext = createContext({});

const initialState = {
  isLogged: false,
  user: null,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_IN':
      return {
        ...state,
        isLogged: action.isLogged,
        user: action.user,
      };
    default:
      return state;
  }
};

type LoginData = {
  username: string;
  password: string;
};

function AuthProvider({children}: {children: React.ReactElement}) {
  const [auth, dispatch] = useReducer(AuthReducer, initialState);

  async function signInDTMoney({username, password}: LoginData) {
    try {
      console.log('início 01', {username, password});
      const response = await api.post('agv-supply/login', {
        username,
        password,
      });

      const {token_type, access_token} = response.data.oauth;

      const BEARER_TOKEN = `${token_type} ${access_token}`;

      console.log({access_token: BEARER_TOKEN});

      api.defaults.headers.common.Authorization = BEARER_TOKEN;
    } catch (error) {
      console.log('Erro 01');
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{auth, signInDTMoney}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('userAuth must be within an AuthProvider');
  }

  return context;
}

export {useAuth, AuthProvider};
