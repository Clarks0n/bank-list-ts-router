import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { BaseQueryFn } from '@reduxjs/toolkit/query'
// import type { AxiosRequestConfig, AxiosError } from 'axios'
import axios from 'axios'

// const axiosBaseQuery =
//   (
//     { baseUrl }: { baseUrl: string } = { baseUrl: '' }
//   ): BaseQueryFn<
//     {
//       url: string
//       method: AxiosRequestConfig['method']
//       data?: AxiosRequestConfig['data']
//       params?: AxiosRequestConfig['params']
//     },
//     unknown,
//     unknown
//   > =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params })
//       return { data: result.data }
//     } catch (axiosError) {
//       let err = axiosError as AxiosError
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       }
//     }
//   };


export const accountListsApi = createApi({
  reducerPath: "accountListsApi",
  // baseQuery : axiosBaseQuery({
  //   baseUrl: 'data/',
  // }),
  baseQuery: fetchBaseQuery({ baseUrl: "data" }),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => "/bank.json",
    }),
    // getProduct: builder.query({
    //   query: (product) => `products/search?q=${product}`,
    // }),
  }),
});

export const { useGetAllQuery } = accountListsApi;



