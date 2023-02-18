import { useRouter } from "next/router";
import {useEffect, useState} from 'react';

const lookup = () => {
  const { asPath, pathname } = useRouter();

  // use effect to fetch slug
  useEffect(() => {
    console.log(asPath); // '/reports/xyz'w
  });

  return <div></div>;
};

export default lookup;
