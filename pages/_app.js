import "../styles/globals.css";
import { useEffect, useState } from "react";
import axios from "axios";

function MyApp({ Component, pageProps }) {
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const token = new URLSearchParams(window.location.search).get("access_token");

		axios
			.get("http://localhost:8010/proxy/user", {
				headers: {
					Authorization: "token " + token,
				},
			})
			.then((res) => {
				setUser(res.data);
				setLoggedIn(true);
			})
			.catch((error) => {
				console.log("error " + error);
			});
	}, []);
	return <Component {...pageProps} state={loggedIn} user={user}/>;
}

export default MyApp;
