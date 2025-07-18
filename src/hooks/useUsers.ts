import { useQuery, useMutation } from "@apollo/client";
import { CREATE_USER, GET_USERS } from "../graphql/queries/getUser";
import { LOGIN_USER } from "../graphql/queries/getUser";

const useGetUsers = () => {
  const { data, loading, error } = useQuery(GET_USERS, {
    fetchPolicy: "network-only",
  });
  return {
    data: data?.users || [],
    loading,
    error,
  };
};

const useCreateUser = () => {
  const [createUserMutation, { data, loading, error }] =
    useMutation(CREATE_USER);

  const createUser = async (user: {
    name: string;
    email: string;
    password: string;
  }) => {
    const response = await createUserMutation({
      variables: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    return response.data?.createUser;
  };

  return {
    createUser,
    data,
    loading,
    error,
  };
};

const useLoginUser = () => {
  const [loginUserMutation, { data, loading, error }] = useMutation(LOGIN_USER);

  const loginUser = async (email: string, password: string) => {
    const response = await loginUserMutation({
      variables: { email, password },
    });
    return response.data?.login?.access_token;
  };

  return {
    loginUser,
    data,
    loading,
    error,
  };
};

export { useCreateUser, useGetUsers, useLoginUser };
