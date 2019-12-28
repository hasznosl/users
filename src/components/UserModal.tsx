import React, { useContext } from 'react'
import ReactModal from 'react-modal';
import { ROOT_ELEMENT_ID } from '../utils/styles';
import InfoItem from './InfoItem';
import { css } from 'glamor';
import SelectedUserContext from '../contexts/SelectedUserContext';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement(`#${ROOT_ELEMENT_ID}`);

const UserModal = ({
  positionX, positionY,
}:
  {
    positionX: number
    positionY: number
  }
) => {

  const { selectedUser, userModalVisible, setUserModalVisible } = useContext(SelectedUserContext)

  const user = selectedUser as unknown as IUserType

  return user && <ReactModal isOpen={userModalVisible}
    style={{
      overlay: {
        width: 500,
        height: 400,
        position: 'absolute',
        top: positionY,
        left: positionX,
      },
      content: { overflow: 'hidden' }
    }}
    shouldCloseOnOverlayClick={true}
  >
    <div {...css({
      display: 'flex',
      flexDirection: "column",
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
    })}>
      <div {...css({ width: '100%', height: '100%' })}>
        {[
          ['street', user.location.street.name],
          ['city', user.location.city],
          ['state', user.location.state],
          ['postcode', user.location.postcode],
          ['phone', user.phone],
          ['cell', user.cell]]
          .map(([label, value]) => <InfoItem
            key={label + value}
            label={label}
            value={value} />
          )}
      </div>
      <div {...css({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
      })}>
        <button onClick={() => setUserModalVisible(false)}>Close</button>
      </div>
    </div>
  </ReactModal>
}

export default UserModal