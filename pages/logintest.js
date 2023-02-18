import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PhishDB from "../components/PhishDB";
import { useEffect, useState } from "react";
import axios from "axios";

export default function logintest() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get(
      "access_token"
    );

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

  return (
    <div className="text-black">
      <NextSeo
        title="Social Threat Finder Phishing DB"
        description="Phishing Database List"
        canonical="https://stf-site.vercel.app/db"
        openGraph={{
          url: "https://stf-site.vercel.app/db",
        }}
      />
      <Head>
        <title>Social Threat Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center mx-auto mt-64 text-center max-w-2x1">
        <h1 className="text-3xl Avenir font-bold tracking-tight text-black md:text-5xl ">
          STF Phishing Database
        </h1>
        <br />
        <div className="max-w-7xl mx-10 sm:mx-auto">
          <div className="App text-center container-fluid">
            {!loggedIn ? (
              <div className="flex items-center justify-center flex-col">
                <img
                  className="mb-4"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="150"
                ></img>
                <h1 className="h3 mb-3 font-weight-normal">
                  Sign in with GitHub
                </h1>
                <a
                  className="btn w-32 p-1 mx-auto font-bold text-center text-blue-700 border border-blue-500 rounded-lg sm:p-2"
                  href="https://github.com/login/oauth/authorize?client_id=9c2336c62b125da0bbd0&redirect_uri=http://localhost:8022/api/session/redirect?oauth=github"
                >
                  Sign in
                </a>
              </div>
            ) : (
              <>
                <h1>Welcome!</h1>
                <p>
                  This is a simple integration between OAuth2 on GitHub with
                  Node.js
                </p>
              </>
            )}
          </div>
        </div>
        <br />
        <a
          className="w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4"
          href="/"
        >
          Return Home
        </a>
      </div>
      <div className="mt-64"></div>
      <Footer />
    </div>
  );
}
