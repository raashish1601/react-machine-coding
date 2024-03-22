import { useState } from "react";
import Modal from "./Modal";

export default function ModalWrapper() {
  const [showModal, setShowModal] = useState(false);
  const [content] = useState("Your Custom Message");

  return (
    <div>
      <h1>Custom Modal</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal
        showModal={showModal}
        content={content}
        handleCloseModal={() => setShowModal(false)}
      />
    </div>
  );
}