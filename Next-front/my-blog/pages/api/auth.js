const Auth = ({ body }) => {
  return <div>
    <h1>auth</h1>
    {body}
  </div>
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch(`http://localhost:3000/auth/signup`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: {body} }
    }
    return { props: { body }};
  } catch (e) {
    console.log(e);
    return { props: {}}
  }
}

export default Auth;