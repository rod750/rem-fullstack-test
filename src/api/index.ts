import { ApiClient } from "@/api/api-client";
import { AxiosAdapter } from "@/api/adapter/axios";

export const api = new ApiClient(new AxiosAdapter("/api", "https://pokeapi.co/api/v2"));