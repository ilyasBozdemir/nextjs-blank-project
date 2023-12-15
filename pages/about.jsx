import { useRouter } from "next/router";
import React from "react";

function AboutPage() {
  const router = useRouter();
  const { locale } = router;

  const content =
    locale === "tr"
      ? "Merhaba, bu Türkçe sayfadır."
      : "Hello, this is an English page.";

  return (
    <div>
      <h1>About Page</h1>
      <p>{content}</p>
    </div>
  );
}

export default AboutPage;
