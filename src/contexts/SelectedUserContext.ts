import React from 'react'

const SelectedUserContext = React.createContext({
  selectedUser: null as unknown as IUserType | null,
  setSelectedUser: (user: IUserType) => { },
  setUserModalVisible: (visible: boolean) => { },
  userModalVisible: false,
})

export default SelectedUserContext