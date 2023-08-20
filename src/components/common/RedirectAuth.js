
const RedirectAuth = () => {

  //const code = new URL(window.location.href).searchParams.get('code');

  const token = new URL(window.location.href).searchParams.get('token');

  console.log(token)

}

export default RedirectAuth;

