import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';
import { setTokens, logout } from '../slice/userSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
  credentials: 'include', // for cookies (refresh token)
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.accessToken;
    if (token) headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});

// Wrap baseQuery to handle refresh token automatically
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const state = api.getState() as RootState;
    const refreshToken = state.user.refreshToken;

    if (refreshToken) {
      const refreshResult = await baseQuery(
        { url: '/oauth2/refresh', method: 'POST', body: { refreshToken } },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        api.dispatch(setTokens(refreshResult.data as any));
        // Retry original query with new access token
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User', 'Chat'],
  endpoints: () => ({}), // will extend in feature-specific APIs
});
