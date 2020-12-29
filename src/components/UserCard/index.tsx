import React from "react";
import { User } from "../../types";
import { Link } from "react-router-dom";

interface Props {
	userData: User;
}

const UserCard: React.FC<Props> = ({ userData }) => {
	return <Link to={`/users/${userData.id}`}>{userData.name}</Link>;
};

export default UserCard;
