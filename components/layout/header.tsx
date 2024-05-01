import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, Flex, Link, Spinner, Text } from "@radix-ui/themes";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 flex h-header w-full items-center border-b bg-[--color-background] dark:border-b-[--gray-a2]">
      <Flex
        className="h-full w-sidebar-open"
        align="center"
        justify="center"
        gap="4"
      >
        <HamburgerMenuIcon className="ml-10 mr-auto lg:hidden" />
        <Text size="6" className="shrink-0 grow lg:m-0 lg:text-center">
          <Link weight="bold" href="/">
            LOGO
          </Link>
        </Text>
      </Flex>
      <nav className="ml-auto mr-10">
        <Flex gap={"6"} align="center">
          <div>
            <Link href="/material">Inspection</Link>
          </div>
          <div>
            <Link href="#">History</Link>
          </div>
          <ClerkLoading>
            <Spinner />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </Flex>
      </nav>
    </div>
  );
};

export { Header };
