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

// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <AppHeader />
//         <main className="container-fluid d-flex flex-column align-items-center">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about-us" element={<AboutUs />} />
//             <Route path="/price" element={<Price />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/contacts" element={<Contacts />} />
//             <Route path="/metal-work" element={<MetalWork />} />
//             <Route path="/coloring" element={<Coloring />} />
//             <Route path="/catalog" element={<Catalog />} />
//             <Route path="/admin/*" element={<Admin />} />
//           </Routes>
//         </main>
//         <AppFooter />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

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
        fixed
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="xl"
            hidden={!opened}
            width={{ sm: 200, md: 200, lg: 300 }}
          >
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
        <main className="container-fluid d-flex flex-column align-items-center">
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
        </main>
      </AppShell>
    </BrowserRouter>
  );
};
export default App;
