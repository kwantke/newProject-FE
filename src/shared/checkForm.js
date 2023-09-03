
export const checkForm = email => {
  const _reg =
    /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

  return _reg.test(email);
}

export const passwordCheck = password => {
  const _reg =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  return _reg.test(password);
}