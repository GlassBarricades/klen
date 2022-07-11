import AppHeader from "./components/UI/App-header";
import AppFooter from "./components/UI/App-footer";
import Home from "./pages/Home";
import AboutUs from "./pages/About-us";
import Price from "./pages/Price";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import MetalWork from "./pages/Metal-work";
import Coloring from "./pages/Coloring";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";
import { Link } from 'react-router-dom';

import { BrowserRouter, Route, Routes } from "react-router-dom";

 import "./App.css";

import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Anchor,
  Container
} from "@mantine/core";

const App = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <BrowserRouter>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="2800"
            hidden={!opened}
            width={{ sm: 500 }}
            px="10"
          >
            <AppHeader responsive={"d-lg-none"} display={"d-flex"} column={"flex-column"}/>
          </Navbar>
        }
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
        header={
          <Header height={70} p="md">
            <Container
            fluid className="header-wrap"
              style={{ display: "flex", height: "100%" }}
            >
              <AppHeader responsive={"d-lg-flex"} display={"d-none"}/>
              <MediaQuery largerThan="md" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
            </Container>
          </Header>
        }
      >
        <Container fluid>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/price" element={<Price />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/metal-work" element={<MetalWork />} />
            <Route path="/coloring" element={<Coloring />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </Container>
      </AppShell>
    </BrowserRouter>
  );
};
export default App;
