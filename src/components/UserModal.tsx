import React from 'react'
import ReactModal from 'react-modal';
import { ROOT_ELEMENT_ID } from '../utils/styles';
import InfoItem from './InfoItem';
import { css } from 'glamor';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement(`#${ROOT_ELEMENT_ID}`);

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
        ['cell', user.cell]].map(([label, value]) => <InfoItem
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
      <button onClick={() => setVisible(false)}>Close</button>
    </div>
  </div>
</ReactModal>

export default UserModal