import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tagsApi = createApi({
  reducerPath: 'tagsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.stackexchange.com/2.3' }),
  endpoints: (builder) => ({
    getTags: builder.query({
      query: () => ({ url: 'tags', params: { site: 'stackoverflow' } }),
    }),
  }),
});

export const { useGetTagsQuery } = tagsApi;
