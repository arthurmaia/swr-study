import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserList from "./pages/UserList";

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={UserList} exact />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
