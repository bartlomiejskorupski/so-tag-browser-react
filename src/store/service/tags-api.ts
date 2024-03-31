import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Tag {
  name: string;
  count: number;
  is_required: boolean;
  is_moderator_only: boolean;
  has_synonyms: boolean;
  collectives?: unknown[];
}

export interface TagsWrapper {
  items: Tag[];
}

export const tagsApi = createApi({
  reducerPath: 'tagsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.stackexchange.com/2.3' }),
  endpoints: (builder) => ({
    getTags: builder.query<TagsWrapper, void>({
      query: () => ({ url: 'tags', params: { site: 'stackoverflow' } }),
    }),
  }),
});

export const { useGetTagsQuery } = tagsApi;
