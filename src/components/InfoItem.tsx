
import React from 'react'
import { css } from 'glamor';

const InfoItem = ({ label, value }:
  {
    label: string
    value: string
  }) => <><div
    {...css({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
    })}>
    <div>{label}</div>
    <div>{value}</div>
  </div>
    <hr />
  </>

export default InfoItem