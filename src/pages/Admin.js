import { useState } from "react";
import { Container, Grid, Tabs, createStyles } from "@mantine/core";
import AdmProducts from "./admin/Adm-products";
import AdmCategory from "./admin/Adm-category";
import { db } from "../firebase";
import { ref, remove } from "firebase/database";

const useStyles = createStyles((theme) => ({
  admin: {
    minHeight: '60vh'
  },
  adminInner: {
    height: '100%'
  },
  adminContent: {
    height: '100%'
  }
}))

const Admin = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const { classes } = useStyles();


  const handleClosePoduct = () => setShowProduct(false);
  const handleShowProduct = () => setShowProduct(true);

  const handleCloseCategory = () => setShowCategory(false);
  const handleShowCategory = () => setShowCategory(true);

  const handleDelete = (item, base) => {
    remove(ref(db, `/${base}/${item.uuid}`));
  };
  const [activeTab, setActiveTab] = useState("first");

  return (
    <>
      <Container fluid className={classes.admin}>
        <Grid className={classes.adminInner}>
          <Grid.Col md={12} className={classes.adminContent}>
            <Tabs
              mt="md"
              variant="outline"
              value={activeTab}
              onTabChange={setActiveTab}
              defaultValue="first"
            >
              <Tabs.List>
                <Tabs.Tab value="first">Каталог</Tabs.Tab>
                <Tabs.Tab value="second">Категории</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="first" pt="xs">
                <AdmProducts
                  handleClose={handleClosePoduct}
                  handleShow={handleShowProduct}
                  show={showProduct}
                  handleDelete={handleDelete}
                />
              </Tabs.Panel>

              <Tabs.Panel value="second" pt="xs">
                <AdmCategory
                  handleClose={handleCloseCategory}
                  handleShow={handleShowCategory}
                  show={showCategory}
                  handleDelete={handleDelete}
                />
              </Tabs.Panel>
            </Tabs>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
export default Admin;
