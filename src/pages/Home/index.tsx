import { useState } from "react";
import { Modal } from "../../components";

const Home = () => {
  const [open, setOpen] = useState(false);

  // add major content of modal by using props.children, use aria-describedby to support extra note info
  return (
    <>
      <h1>NewDay</h1>
      <h2>Let’s see a modal</h2>
      <button data-testid="modal-open" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <Modal
        message="Hello World!"
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <div>
          <div className="dialogForm">
            <div className="dialogFormItem">
              <label>
                <span className="labelText">Address:</span>
                <input type="text" />
              </label>
            </div>
            <div className="dialogFormItem">
              <label>
                <span className="labelText">City:</span>
                <input type="text" />
              </label>
            </div>
            <div className="dialogFormItem">
              <label>
                <span className="labelText">Post code:</span>
                <input type="text" />
              </label>
            </div>
            <div className="dialogFormItem">
              <label htmlFor="note">
                <span className="labelText">Special note:</span>
              </label>
              <input id="note" type="text" aria-describedby="note-desc" />
              <div className="labelInfo" id="note-desc">
                For example, gate code or other information to help the driver
                find you
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Home;
