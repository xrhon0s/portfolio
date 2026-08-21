import type { Metadata } from "next";

const title = "Credentials — David Sanchez";
const description =
  "Verified certifications and active learning paths from David Sanchez Tabarez.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [],
  },
  twitter: {
    title,
    description,
    images: [],
  },
};

export default function CredentialsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
