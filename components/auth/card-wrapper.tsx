"use client";

import { Box, Button, Card, Flex } from "@radix-ui/themes";
import { BackButton } from "@/components/auth/back-button";
import { Header } from "@/components/auth/header";

BackButton;

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Box className="relative max-w-[400px]">
      <Box className="h-full w-full overflow-hidden rounded-lg shadow-xl"></Box>
      <Card size="4" className="relative shadow-[--shadow-6]">
        <Flex pb="4">
          <Header label={headerLabel} />
        </Flex>
        {children}
        <Flex direction="column" gap="2" my="3">
          {showSocial && <Button variant="surface">Google</Button>}
          <BackButton href={backButtonHref} label={backButtonLabel} />
        </Flex>
      </Card>
    </Box>
  );
};
