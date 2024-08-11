import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Offline() {
  return (
    <div className="offline">
      <h1>Offline</h1>
      <p>You are currently offline. Please check your internet connection.</p>
    </div>
  );
}

export async function getServerSideProps(props: any) {
  return {
    props: {
      ...(await serverSideTranslations(props.locale, ['common'])),
    },
  }
}