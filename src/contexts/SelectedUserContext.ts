import React from 'react'

const SelectedUserContext = React.createContext({ selectedUser: null, setSelectedUser: (user: IUserType) => { } })

export default SelectedUserContext