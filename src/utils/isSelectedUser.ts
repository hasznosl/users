const isSelectedUSer = (selectedUser: any, user: any) => selectedUser &&
  (
    (user.email + user.login.username) === (selectedUser.email + selectedUser.login.username)
  )

export default isSelectedUSer