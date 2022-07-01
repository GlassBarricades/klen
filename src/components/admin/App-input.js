import { FloatingLabel, Form } from "react-bootstrap";

const AppInput = ({type, label, placeholder, value, handler, ...attrs}) => {
    return (
        <FloatingLabel controlId="floatingInput" label={label} className="mb-3">
            <Form.Control
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={handler}
              {...attrs}
            />
          </FloatingLabel>
    )
}
export default AppInput;