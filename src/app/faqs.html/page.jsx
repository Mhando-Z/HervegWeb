"use client";

import React, { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  useLayoutEffect(() => {
    // navigate to aboutus page
    router.push("/frequentlyQnA");
  }, []);
  return <div>loading....</div>;
}

export default Page;
