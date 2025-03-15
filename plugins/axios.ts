import axios from 'axios';
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp: any) => {
  const runtimeConfig = useRuntimeConfig();
  const envVariables = runtimeConfig.public
  const baseURL = envVariables.apiBase
  const Authorization = envVariables.apiToken

  let api = axios.create({
    baseURL,
    headers: {
      Authorization,
    },
  });

  return {
    provide: {
      api: api,
    },
  };
});
