import { FloatingLabel, Form } from "react-bootstrap";

const AppSelect = ({label, value, handler, options=[], ...attrs}) => {
    return (
        <FloatingLabel controlId="floatingSelect" label={label} className="mb-3">
            <Form.Select value={value} onChange={handler} {...attrs}>
                {options.map((item, i) => {
                    return (
                        <option key={i} value={item}>{item}</option>
                    )
                })}
            </Form.Select>
          </FloatingLabel>
    )
}
export default AppSelect;