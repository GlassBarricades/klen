import { useRef } from 'react';
import { Table, createStyles, Button } from "@mantine/core";
import ReactToPrint from 'react-to-print';

const useStyles = createStyles((theme) => ({
  container: {
    '@media print': {
      margin: "2em",
      marginRight: "2em",
      '@page': {
        margin: '1cm'
    }
    },
  }
}))

const PriceTable = ({ data, filter }) => {
  const componentRef = useRef();

  const { classes } = useStyles();

    const filterDataCatalog = (data, category) => {
        const arr = data.filter((item) => {
          if (item.category === category) {
            return item;
          } else if (category === "Весь каталог") {
            return item;
          }
          return false;
        });
        return arr;
      };
    
      function createRows(data, category) {
        const el = filterDataCatalog(data, category);
        const rows = el.map((item, i) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.price} руб</td>
          </tr>
        ));
        return rows;
      }
  return (
    <>
    <ReactToPrint
        trigger={() => <Button variant="gradient" gradient={{ from: 'blue', to: 'royalblue' }}>Напечатать выбранную категорию</Button>}
        content={() => componentRef.current}
      />
      <Table className={classes.container} ref={componentRef}>
        <thead>
          <tr>
            <th>Название</th>
            <th>Цена \ руб</th>
          </tr>
        </thead>
        <tbody>{createRows(data, filter)}</tbody>
      </Table>
    </>
  );
};
export default PriceTable;
