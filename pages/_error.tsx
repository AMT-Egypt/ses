import { NextPageContext } from "next";

function Error({ statusCode }: { statusCode: string | number }) {
  return (
    <h1 style={{ marginTop: "250px" }}>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </h1>
  );
}

Error.getInitialProps = async ({
  res,
  err,
}: {
  res: NextPageContext["res"];
  err: NextPageContext["err"];
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
