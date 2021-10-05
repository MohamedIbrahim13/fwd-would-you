export function setUser(id) {
  return {
    type: "SET_USER",
    id,
  };
}

export function unsetUser() {
  return {
    type: "UNSET_USER",
  };
}
