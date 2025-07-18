// lib/apollo-client.ts
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Router from "next/router";

// 👉 Bắt lỗi 401 hoặc UNAUTHENTICATED
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (
        err.extensions?.code === "UNAUTHENTICATED" ||
        err.message.includes("Token expired") ||
        err.message.includes("Unauthorized")
      ) {
        console.warn("🔒 Token expired or invalid → redirecting to /login");
        Router.replace("/login");
      }
    }
  }

  if (networkError) {
    const statusCode = (networkError as any)?.statusCode;
    if (statusCode === 401) {
      console.warn("🔒 Network 401 → redirecting to /login");
      Router.replace("/login");
    }
  }
});

// ✅ HttpLink để gửi request GraphQL
const httpLink = new HttpLink({
  uri: process.env.BE_URL || "http://localhost:3001/graphql",
  credentials: "include", // ⚠️ cần để cookie HttpOnly được gửi từ FE
});

// ✅ Kết hợp errorLink + httpLink
const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
