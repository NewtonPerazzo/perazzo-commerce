import type { Metadata } from "next";
import "../globals.css";
import { MainHeader } from "@/components/molecules/MainHeader";
import { Box } from "@mui/material";
import { MainFooter } from "@/components/molecules/MainFooter";
import { Providers } from "@/store/providers";

export const metadata: Metadata = {
  title: "Doce Maria Confeitaria",
  description: "Lanches e sobremesas | Encomendas de festas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <MainHeader />
          <Box sx={{ paddingTop: "86px" }}>
            {children}
          </Box>
          <MainFooter />
        </Providers>
      </body>
    </html>
  );
}
