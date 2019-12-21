import React from 'react'
import ReactModal from 'react-modal';
import { ROOT_ELEMENT_ID } from './styles';

ReactModal.setAppElement(`#${ROOT_ELEMENT_ID}`);

const UserModal = ({
  positionX, positionY, visible, setVisible, user
}:
  {
    positionX: number
    positionY: number
    visible: boolean
    setVisible: (visible: boolean) => void,
    user: any
  }
) => user && <ReactModal isOpen={visible}
  style={{
    overlay: {
      width: 500, height: 500, position: 'absolute', top: positionY,
      left: positionX
    }
  }}
  shouldCloseOnOverlayClick={true}
>
  <li>street: {user.location.street.name}</li>
  <li>city: {user.location.city}</li>
  <li>state: {user.location.state}</li>
  <li>postcode: {user.location.postcode}</li>
  <li>phone: {user.phone}</li>
  <li>cell: {user.cell}</li>
  <button onClick={() => setVisible(false)}>Close Modal</button>
</ReactModal>

export default UserModal