import { Helmet } from "react-helmet";
export default function Title({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
