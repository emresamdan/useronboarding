import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Seo({ title, description, image }) {
  const router = useRouter();
  const websiteurl = "https://useronboarding.academy";
  const canonicalurl = websiteurl + router.asPath;
  const imageurl = websiteurl + (image || "/assets/img/cover.jpg");

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonicalurl}
      openGraph={{
        url: { canonicalurl },
        title: title,
        description: description,
        images: [
          {
            url: imageurl,
            width: 800,
            height: 600,
            alt: "Og Image Alt",
          },
        ],
      }}
      twitter={{
        handle: "@popupbuilder",
        site: "@popupbuilder",
        cardType: "summary_large_image",
      }}
    />
  );
}
