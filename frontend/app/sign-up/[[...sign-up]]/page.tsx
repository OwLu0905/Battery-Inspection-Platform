import { SignUp } from "@clerk/nextjs";
import { Box, Container, Flex, Section } from "@radix-ui/themes";

export default function Page() {
  return (
    <Section>
      <Container className="mx-auto px-4 lg:px-20">
        <Flex mt="9" align="center" gap="6">
          <Box className="hidden rounded-md bg-white/30 backdrop-blur-2xl sm:block sm:w-1/2 lg:w-3/5"></Box>
          <Box className="grow">
            <SignUp path="/sign-up" />
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
