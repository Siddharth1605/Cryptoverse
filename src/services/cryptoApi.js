import  {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiheaders = {
    'X-RapidAPI-Key': ' ',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }

  const baseUrl = 'https://coinranking1.p.rapidapi.com'

  const createRequest = (url) => ({ url, headers: cryptoApiheaders})
  
  export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
          query:(coinId) => createRequest(`/coin/${coinId}`)
        })
    })
  })

  export const {
    useGetCryptosQuery,
    useGetcryptoDetailsQuery
  } = cryptoApi

