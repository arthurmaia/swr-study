import React, { useCallback } from "react";
import { mutate as mutateGlobal } from "swr";

import { useFetch } from "../../hooks/useFetch";
import api from "../../services/api";
import { User } from "../../types";
import UserCard from "../../components/UserCard";

const UserList: React.FC = () => {
	const { data, mutate } = useFetch<User[]>("users");

	const handleChangeName = useCallback(
		(id: number) => {
			api.put(`/users/${id}`, { name: "Carolina" });

			const updatedUsers = data?.map((user) => {
				if (user.id === id) {
					return { ...user, name: "Carolina" };
				}

				return user;
			});

			mutate(updatedUsers, false);
			mutateGlobal(`/users/${id}`, { id, name: "Carolina" });
		},
		[data, mutate]
	);

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			{data?.map((user) => (
				<UserCard key={user.id} userData={user} />
			))}
		</div>
	);
};

export default UserList;
