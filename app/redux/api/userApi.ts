import { baseApi } from './baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => '/user/me',
      providesTags: ['User'],
    }),
    loginWithGoogle: builder.mutation<any, void>({
      query: () => ({ url: '/oauth2/success', method: 'GET' }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserQuery, useLoginWithGoogleMutation } = userApi;
