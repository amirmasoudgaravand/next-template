import { createApi } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import baseQuery from "./baseQuery";
import {
    GetWeatherRequest,
    GetWeatherResponse,
    GetWeatherANSIRequest,
    GetWeatherANSIResponse,
    CreateFooRequest,
    CreateFooResponse,
} from "./types";

export const api = createApi({
    reducerPath: "api",
    tagTypes: [],
    baseQuery,
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        createFoo: builder.mutation<CreateFooResponse, CreateFooRequest>({
            query: (body) => ({
                url: "foo-endpoint",
                method: "POST",
                body,
            }),
        }),
        getWeather: builder.query<GetWeatherResponse, GetWeatherRequest>({
            query: ({ city }) => ({
                url: `https://wttr.in/${city}?format=j1`,
                credentials: "omit",
            }),
        }),
        getWeatherANSI: builder.query<
            GetWeatherANSIResponse,
            GetWeatherANSIRequest
        >({
            query: ({ city }) => ({
                url: "weather/sample-ansi.html",
                responseHandler: "text",
            }),
        }),
        foo: builder.query<string[], string[]>({
            query: (channel) => `messages/${channel}`,
            async onCacheEntryAdded(
                arg,
                { updateCachedData, cacheDataLoaded, cacheEntryRemoved },
            ) {
                // create a websocket connection when the cache subscription starts
                const ws = new WebSocket("ws://localhost:8080");
                try {
                    // wait for the initial query to resolve before proceeding
                    await cacheDataLoaded;

                    // when data is received from the socket connection to the server,
                    // if it is a message and for the appropriate channel,
                    // update our query result with the received message
                    const listener = (event: MessageEvent) => {
                        const data = JSON.parse(event.data);
                        if (data.channel !== arg) return;

                        updateCachedData((draft) => {
                            draft.push(data);
                        });
                    };

                    ws.addEventListener("message", listener);
                } catch {
                    // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
                    // in which case `cacheDataLoaded` will throw
                }
                // cacheEntryRemoved will resolve when the cache subscription is no longer active
                await cacheEntryRemoved;
                // perform cleanup steps once the `cacheEntryRemoved` promise resolves
                ws.close();
            },
        }),
    }),
});
