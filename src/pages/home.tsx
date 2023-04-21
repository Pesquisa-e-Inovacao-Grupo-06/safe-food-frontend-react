import Pagination from "@/components/atoms/pagination";
import { ReactNode } from "react";

interface User {
	id: number;
	name: string;
	email: string;
}

const users: User[] = [
	{ id: 1, name: "Alice", email: "alice@example.com" },
	{ id: 2, name: "Bob", email: "bob@example.com" },
	{ id: 3, name: "Charlie", email: "charlie@example.com" },
	{ id: 4, name: "David", email: "david@example.com" },
	{ id: 5, name: "Eve", email: "eve@example.com" },
	{ id: 6, name: "Frank", email: "frank@example.com" },
	{ id: 7, name: "Grace", email: "grace@example.com" },
	{ id: 8, name: "Heidi", email: "heidi@example.com" },
	{ id: 9, name: "Ivan", email: "ivan@example.com" },
	{ id: 10, name: "Jasmine", email: "jasmine@example.com" },
	{ id: 7, name: "Grace", email: "grace@example.com" },
	{ id: 8, name: "Heidi", email: "heidi@example.com" },
	{ id: 9, name: "Ivan", email: "ivan@example.com" },
	{ id: 10, name: "Jasmine", email: "jasmine@example.com" },
	{ id: 7, name: "Grace", email: "grace@example.com" },
	{ id: 8, name: "Heidi", email: "heidi@example.com" },
	{ id: 9, name: "Ivan", email: "ivan@example.com" },
	{ id: 10, name: "Jasmine", email: "jasmine@example.com" },
	{ id: 7, name: "Grace", email: "grace@example.com" },
	{ id: 8, name: "Heidi", email: "heidi@example.com" },
	{ id: 9, name: "Ivan", email: "ivan@example.com" },
	{ id: 10, name: "Jasmine", email: "jasmine@example.com" },
];

function Home() {
	function renderUser(user: User): ReactNode {
		return (
			<div key={user.id}>
				<p>Name: {user.name}</p>
				<p>Email: {user.email}</p>
			</div>
		);
	}

	return (
		<div>
			<h1>Users</h1>
			<Pagination
				items={users}
				itemsPerPage={3}
				renderItem={renderUser}
			/>
			{/* <HomeTemplate></HomeTemplate> */}
		</div>
	);
}

export default Home;
