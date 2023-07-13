import React from "react";

import Chats from "./Chats";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversations";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Chats></Chats>

        {/* Conversation */}
        <Box
          sx={{
            width: sidebar.open ? "calc(100vw-740px)" : "calc(100vw-420px)",
            height: "100%",
            backgroundColor: theme.palette.mode === "light" ? "#ff9" : "#14f2",
          }}
        >
          <Conversation />
        </Box>

        {/* Contact */}
        {sidebar.open && <Contact />}
      </Stack>
    </>
  );
};

export default GeneralApp;
