import { Form } from "react-bootstrap";

const SearchInput = ({classes, handler}) => {
    return (
        <Form.Control
        className={classes}
        type="text"
        placeholder="Поиск..."
        onChange={handler}
      />
    )
}
export default SearchInput;