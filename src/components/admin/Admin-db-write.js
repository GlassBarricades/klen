import { useState } from "react";
import { openModal, closeAllModals, openConfirmModal } from "@mantine/modals";
import { TextInput, Button, Group } from "@mantine/core";

const AdminDbWrite = () => {
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  console.log(name);

  const input = (
    <TextInput
      value={name}
      onChange={(e) => setName(e.target.value)}
      label="Your email"
      placeholder="Your email"
      data-autofocus
    />
  );

  return (
    <>
      <Group position="center">
        <Button
          onClick={() => {
            openModal({
              title: "Subscribe to newsletter",
              children: (
                <>
                {input}
                  {/* <TextInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    label="Your email"
                    placeholder="Your email"
                    data-autofocus
                  /> */}
                  <Button fullWidth onClick={closeAllModals} mt="md">
                    Submit
                  </Button>
                </>
              ),
            });
          }}
        >
          Open content modal
        </Button>
      </Group>
    </>
  );
};
export default AdminDbWrite;
