import React from "react";
import {
    BrowserRouter,
    Routes,
    Route, Link
} from "react-router-dom";
import {ROUTE_PATH} from "./constants/routes";
import {HomePage, FaqPage} from "./modules";
import {FaqCategoryDetails} from "./modules/Faq/pages/FaqCategoryDetails";
import {FaqQuestionDetail} from "./modules/Faq/pages/FaqQuestionDetail";

export function Router(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTE_PATH.INDEX} element={<HomePage/>}/>
                <Route path={ROUTE_PATH.FAQ} element={<FaqPage/>}/>
                <Route path={ROUTE_PATH.FAQ_CATEGORY} element={<FaqCategoryDetails/>}/>
                <Route path={ROUTE_PATH.FAQ_QUESTION} element={<FaqQuestionDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}