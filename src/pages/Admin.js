import { useState } from "react";
import { Container, Grid } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import AdmProducts from "./admin/Adm-products";
import AdmNav from "../components/admin/Adm-nav";
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

  return (
    <>
      <Container fluid className="admin mt-5 mb-5">
        <Grid className="admin-inner">
          <Grid.Col md={2} className="admin-sidebar">
            <AdmNav />
          </Grid.Col>
          <Grid.Col md={10} className="admin-content">
        <Routes>
          <Route path="/adm-products" element={<AdmProducts handleClose={handleClose} handleShow={handleShow} show={show} handleDelete={handleDelete} />} />
          <Route path="/adm-category" element={<AdmCategory handleClose={handleClose} handleShow={handleShow} show={show} handleDelete={handleDelete}/>} />
          <Route path="/adm-articles" element={<AdmArticles handleClose={handleClose} handleShow={handleShow} show={show} handleDelete={handleDelete} />} />
        </Routes>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
export default Admin;
