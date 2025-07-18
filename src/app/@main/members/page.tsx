"use client";

import { useGetUsers } from "../../../hooks/useUsers";

export default function UsersPage() {
  const { data, loading, error } = useGetUsers();

  if (loading) return <p className="text-white">Đang tải...</p>;
  if (error) return <p className="text-red-500">Lỗi: {error.message}</p>;

  return (
    <div className="text-center">
      {data.map((user: any) => (
        <div key={user.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
