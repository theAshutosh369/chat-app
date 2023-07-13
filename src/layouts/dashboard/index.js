import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, IconButton, Stack, Avatar, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Divider } from "@mui/material";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import logo from "../../assets/Images/logo.ico";

import AntSwitch from "../../components/AntSwitch";

const DashboardLayout = () => {
  const theme = useTheme();
  console.log(theme);

  const [selected, setSelected] = new useState(0);
  const { onToggleMode } = useSettings();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack direction="row">
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            padding: 2,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            height: "100vh",
            width: 100,
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            spacing={3}
            sx={{ height: "100%" }}
            justifyContent={"space-between"}
          >
            <Stack alignItems={"center"} spacing={4}>
              {/* LOGO */}
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  height: 64,
                  width: 64,
                  borderRadius: 1.5,
                }}
              >
                <img src={logo} alt="chatapp logo" />
              </Box>

              {/* Navigation pages */}
              <Stack
                direction="column"
                alignItems="center"
                spacing={3}
                sx={{ width: "100%" }}
              >
                {/* 3 Navigation pages */}
                {Nav_Buttons.map((el) =>
                  el.index === selected ? (
                    <Box
                      p={1}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                      }}
                    >
                      <IconButton
                        sx={{ width: "max-content", color: "#fff" }}
                        key={el.index}
                      >
                        {el.icon}
                      </IconButton>
                    </Box>
                  ) : (
                    <IconButton
                      onClick={() => setSelected(el.index)}
                      sx={{
                        width: "max-content",
                        color: theme.palette.mode === "light" ? "#000" : "#fff",
                      }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  )
                )}

                {/* Divider */}
                <Divider sx={{ width: 50, height: 10 }}></Divider>

                {/* Settings */}
                {selected === 3 ? (
                  <Box
                    p={1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton sx={{ width: "max-content", color: "#fff" }}>
                      <Gear></Gear>
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => setSelected(3)}
                    sx={{
                      width: "max-content",
                      color: theme.palette.mode === "light" ? "#000" : "#fff",
                    }}
                  >
                    <Gear></Gear>
                  </IconButton>
                )}
              </Stack>
            </Stack>

            <Stack spacing={4} alignItems="center">
              {/* Switch */}
              <AntSwitch
                onChange={() => onToggleMode()}
                defaultChecked
              ></AntSwitch>

              {/* Avatar */}
              <Avatar
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                src={faker.image.avatar()}
              ></Avatar>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
                anchorOrigin={{
                  vertical:'bottom' ,
                  horizontal:'right'
                  
                }}
                transformOrigin={{
                  vertical:'bottom',
                  horizontal:'left'
                }}
              >
                <Stack spacing={1} px={1}>
                  {Profile_Menu.map((el) => (
                    <MenuItem onClick={() => {}}>
                      <Stack
                        sx={{ width: 100 }}
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <span>{el.title} </span>
                        {el.icon}
                      </Stack>
                    </MenuItem>
                  ))}
                </Stack>
              </Menu>
            </Stack>
          </Stack>
        </Box>

        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
