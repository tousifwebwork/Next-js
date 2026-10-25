import type { Metadata } from "next"; 
import "./globals.css";

export const metadata: Metadata = { 
  title: "My First Full Stack using  Next App",
  description: "This is my first full stack project using Next App. Is is created using Ultimate Full Stack Course by Zero to Mastery on Udemy. This project is created using Next App, Tailwind CSS, Prisma, PlanetScale, and NextAuth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html  lang="en" >
      <body>
        {children}
      </body>
    </html>
  );
}
