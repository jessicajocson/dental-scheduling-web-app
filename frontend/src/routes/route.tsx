import { Box } from "@mui/material";
import { Fragment, Key } from "react";
import { RouteList } from "../constants/route";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./hooks.ts/useProtectRoute";

const RouteComponent = () => {
  return (
    <Fragment>
      <Box>
        <BrowserRouter>
          <Routes>
            {RouteList.map((route: any, index: Key) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    route.protected ? (
                      <ProtectedRoute element={route.component} />
                    ) : (
                      <route.component />
                    )
                  }
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </Box>
    </Fragment>
  );
};

export default RouteComponent;
