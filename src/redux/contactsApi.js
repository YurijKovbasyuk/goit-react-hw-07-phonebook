import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fe9414a85c52ee483a2388.mockapi.io/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
    }),
    // getContactByName: builder.query({
    //   query: name => `contact/${name}`,
    // }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
