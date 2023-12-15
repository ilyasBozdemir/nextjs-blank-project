import PageWrapper from "@/components/Wrapper/PageWrapper";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <center>
        <p>{t("greeting", { name: "ilyas" })}</p>
      </center>
    </PageWrapper>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
