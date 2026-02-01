import { baseApi } from './baseApi';

export const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query<any[], void>({
      query: () => '/chat',
      providesTags: ['Chat'],
    }),
    sendMessage: builder.mutation<any, { message: string }>({
      query: (body) => ({ url: '/chat', method: 'POST', body }),
      invalidatesTags: ['Chat'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetChatsQuery, useSendMessageMutation } = chatApi;
