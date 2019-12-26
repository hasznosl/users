const isSelectedUSer = (selectedUser: IUserType, user: IUserType) => selectedUser &&
  (
    (user.email + user.login.username) === (selectedUser.email + selectedUser.login.username)
  )

export default isSelectedUSer