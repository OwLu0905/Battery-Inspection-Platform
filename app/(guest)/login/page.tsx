import { LoginForm } from "@/components/auth/login-form";
import { Blockquote, Box, Container, Flex, Section } from "@radix-ui/themes";

export default function LoginPage() {
  return (
    <Section>
      <Container className="mx-auto px-4 lg:px-20">
        <Flex mt="9" align="center" gap="6">
          <Box className="hidden rounded-md bg-white/30 backdrop-blur-2xl sm:block sm:w-1/2 lg:w-3/5">
            <Blockquote size="3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              rerum optio nemo facere iure velit nulla maxime, asperiores,
              voluptatibus atque sed error. Nostrum nobis ducimus itaque sunt
            </Blockquote>
          </Box>
          <Box className="grow">
            <LoginForm />
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
