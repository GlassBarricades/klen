import AppHeader from "./components/UI/App-header";
import Home from "./pages/Home";
import AboutUs from "./pages/About-us";
import Price from "./pages/Price";
import Contacts from "./pages/Contacts";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";
import Exclusive from "./pages/Exclusive";
import SideNav from "./components/UI/Side-nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useFetchData from "./hooks/useFetchData";

import "./App.css";

import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
  Container,
  createStyles,
} from "@mantine/core";
import FooterMobile from "./components/UI/Footer-mobile";
import Service from "./pages/Service";
import MetalWork from "./components/UI/Service/Metalwork";
import Coloring from "./components/UI/Service/Coloring";

const useStyles = createStyles((theme) => ({
  header: {
    position: "static",
  },
}));

const App = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const [products] = useFetchData(`/products/`);
  const [categories] = useFetchData(`/category/`);

  const createCategoriesNameArray = (array) => {
    const arr = array.map((item) => {
      return item.name;
    });
    return arr;
  };

  const categoryPriceData = createCategoriesNameArray(categories);

  const openedHandler = () => {
    setOpened(false);
  };

  return (
    <BrowserRouter>
      <MediaQuery smallerThan="md" styles={{ paddingBottom: 70 }}>
        <AppShell
          styles={{
            main: {
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
              paddingTop: 0,
              paddingBottom: 0,
            },
          }}
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          padding="0"
          navbar={
            <Navbar
              p="md"
              hiddenBreakpoint="2800"
              hidden={!opened}
              width={{ sm: 200, lg: 300 }}
            >
              <SideNav trigger={openedHandler} />
            </Navbar>
          }
          footer={
            <MediaQuery largerThan="md" styles={{ display: "none" }}>
              <Footer height={60} p="md">
                <FooterMobile />
              </Footer>
            </MediaQuery>
          }
          header={
            <Header fixed={false} height={70} p="md" className={classes.header}>
              <Container
                fluid
                className="header-wrap"
                style={{ display: "flex", height: "100%" }}
              >
                <AppHeader />
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
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route
                path="price"
                element={<Price data={products} category={categoryPriceData} />}
              />
              <Route path="contacts" element={<Contacts />} />
              <Route path="catalog/*" element={<Catalog />} />
              <Route path="admin" element={<Admin />} />
              <Route path="exclusive" element={<Exclusive />} />
              <Route path="service" element={<Service />} />
              <Route path="metalwork" element={<MetalWork />} />
              <Route path="coloring" element={<Coloring />} />
            </Routes>
          </div>
        </AppShell>
      </MediaQuery>
    </BrowserRouter>
  );
};
export default App;
