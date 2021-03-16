import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users {
      name
      email
      password
    }
  }
`;

const Login = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  return data.users.map((user) => (
    <div>
      <span>{user.name}</span>
      <br />
      <span>{user.email}</span>
    </div>
  ));
};

export default Login;
