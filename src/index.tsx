import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Router} from "./Router";
import {Layout} from "./components";
import {QueryClient, QueryClientProvider} from "react-query"
import {ReactQueryDevtools} from "react-query/devtools";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const quertClient = new QueryClient()
root.render(
    <React.StrictMode>
        <QueryClientProvider client={quertClient}>
            <Layout>
                <Router/>
            </Layout>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
