import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AstronomicalObject } from '../types/shared';
import { ITEMS_PER_PAGE } from '../config';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stapi.co/api/v2/rest/astronomicalObject',
  }),
  endpoints: (builder) => ({
    getAstronomicalObj: builder.query<AstronomicalObject[], number>({
      query: (page) => `/search?pageNumber=${page}&pageSize=${ITEMS_PER_PAGE}`,
      transformResponse: (response: {
        astronomicalObjects: AstronomicalObject[];
      }) => response.astronomicalObjects,
    }),
    getSingleAstronomicalObj: builder.query<AstronomicalObject, string>({
      query: (uid) => `?uid=${uid}`,
      transformResponse: (response: {
        astronomicalObject: AstronomicalObject;
      }) => response.astronomicalObject,
    }),
  }),
});

export const { useGetAstronomicalObjQuery, useGetSingleAstronomicalObjQuery } =
  apiSlice;
