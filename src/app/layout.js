import { Control } from "./Control";
import "./globals.css";
import RecoilRootWrapper from "./RecoilRootWrapper";
import Link from "next/link";
export const metadata = {
  title: "web tutorial",
  description: "Generated by create next app",
};
export default async function RootLayout({ children }) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "topics", {
    cache: "no-store",
  });
  const topics = await res.json();
  return (
    <html>
      <body>
          <h1>
            <Link href="/">WEB</Link>
          </h1>
          <ol>
            {topics.map((topic) => {
              return (
                <li key={topic.id}>
                  <Link href={`/read/${topic.id}`}>{topic.title}</Link>
                </li>
              );
            })}
          </ol>
          {children}
          <Control />
      </body>
    </html>
  );
}
