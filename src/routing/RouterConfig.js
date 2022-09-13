import React, { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import CenterContainer from "components/containers/CenterContainer";
import { HOME, NOTFOUND } from "constants/routes";
import {DETAILS} from "constants/routes";
import {WATCHLIST} from "constants/routes"
import CardDetails from "components/CardDetails/CardDetails";
import WatchList from "../components/WatchList/WatchList"
import NotFound from "components/NotFound/NotFound";
const Header = lazy(() => import("components/Header"));
const Home = lazy(() => import("pages/Home"));


const RouterConfig = () => {
  const [search,setSearch]=useState("")
  return (
    // <Suspense fallback={<Loader />}>
    <Suspense fallback={<Loader />}>
      <Header setSearch={setSearch} search={search}/>
      <Routes>
        <Route path={HOME} element={<Home search={search} />} />     
        <Route path={DETAILS} element={<CardDetails search={search} />} />     
        <Route path={WATCHLIST} element={<WatchList search={search}/>} />     
        <Route path={NOTFOUND} element={<NotFound/>} />     
        
      </Routes>
    </Suspense>
  );
};

const Loader = () => (
  
  <CenterContainer >
    <CircularProgress />
  </CenterContainer>
);

export default RouterConfig;
