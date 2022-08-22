import { Table } from "@mantine/core";

const PriceTable = ({ data, filter }) => {

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
            <td>{item.uuid}</td>
            <td>{item.name}</td>
            <td>{item.price} руб</td>
          </tr>
        ));
        return rows;
      }
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Номер</th>
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
