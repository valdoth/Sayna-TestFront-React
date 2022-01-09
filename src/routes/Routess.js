import React from "react";
import { Route, useLocation, Navigate, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import { Home, Search, Pickup, Order, Account } from "../pages";

function Routess() {
  const location = useLocation();
  return (
    <Layout>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} exact />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/order" element={<Order />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Navigate to="oops" />} />
      </Routes>
    </Layout>
  );
}

export default Routess;
