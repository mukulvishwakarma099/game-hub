import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box
        padding={{
          base: 0,
          md: 5,
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
