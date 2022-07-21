import { useState } from "react";
import { Container, Grid, Tabs } from "@mantine/core";
import AdmProducts from "./admin/Adm-products";
import AdmArticles from "./admin/Adm-articles";
import AdmCategory from "./admin/Adm-category";
import { db } from "../firebase";
import { ref, remove } from "firebase/database";

import "./Admin.css";

const Admin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (item, base) => {
    remove(ref(db, `/${base}/${item.uuid}`));
  };
  const [activeTab, setActiveTab] = useState(1);
  const onChange = (active, tabKey) => {
    setActiveTab(active);
    console.log('tabKey', tabKey);
  };

  return (
    <>
      <Container fluid className="admin mt-5 mb-5">
        <Grid className="admin-inner">
          <Grid.Col md={12} className="admin-content">
            <Tabs variant="outline" active={activeTab} onTabChange={onChange}>
              <Tabs.Tab label="Каталог" tabKey="First">
                <AdmProducts
                  handleClose={handleClose}
                  handleShow={handleShow}
                  show={show}
                  handleDelete={handleDelete}
                />
              </Tabs.Tab>
              <Tabs.Tab label="Категории" tabKey="Second">
                <AdmCategory
                  handleClose={handleClose}
                  handleShow={handleShow}
                  show={show}
                  handleDelete={handleDelete}
                />
              </Tabs.Tab>
              <Tabs.Tab label="Статьи" tabKey="Third">
                <AdmArticles
                  handleClose={handleClose}
                  handleShow={handleShow}
                  show={show}
                  handleDelete={handleDelete}
                />
              </Tabs.Tab>
            </Tabs>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
export default Admin;
