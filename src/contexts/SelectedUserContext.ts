import React from 'react'

const SelectedUserContext = React.createContext({
  selectedUser: null,
  setSelectedUser: (user: IUserType) => { },
  setUserModalVisible: (visible: boolean) => { },
  userModalVisible: false,
})

export default SelectedUserContext