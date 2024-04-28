"use client";
import React from "react";
import {
  CopyIcon,
  InfoCircledIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import {
  Badge,
  Blockquote,
  Box,
  Button,
  Callout,
  Card,
  Checkbox,
  Code,
  Container,
  DataList,
  Flex,
  Grid,
  IconButton,
  Link,
  Section,
  SegmentedControl,
  Select,
  Slider,
  Switch,
  Tabs,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { useTheme } from "next-themes";

export default function Home() {
  const [value, _] = React.useState("light");
  const { theme = "light", setTheme } = useTheme();
  const data = {
    light: { label: "light", icon: <SunIcon /> },
    dark: { label: "dark", icon: <MoonIcon /> },
  };
  return (
    <main className="">
      <Container
        className="pt-32"
        size={{ initial: "1", sm: "4" }}
        px={{ initial: "2" }}
      >
        <Grid columns={{ initial: "1", xs: "2", sm: "3" }} gap="3">
          <Flex direction="column" gap="4">
            <Text>Hello from Radix Themes :)</Text>
            <Button className="">Let's go</Button>
            <Checkbox />
            <Slider tabIndex={0} radius="full" size="1" defaultValue={[80]} />
            <Flex direction="column" maxWidth="160px">
              <Select.Root value={theme} onValueChange={(e) => setTheme(e)}>
                <Select.Trigger>
                  <Flex as="span" align="center" gap="2">
                    {data?.[value as keyof typeof data]?.icon}
                    {data?.[value as keyof typeof data]?.label}
                  </Flex>
                </Select.Trigger>
                <Select.Content position="popper">
                  <Select.Item value="light">Light</Select.Item>
                  <Select.Item value="dark">Dark</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>
            <Switch defaultChecked />
          </Flex>
          <SegmentedControl.Root defaultValue="inbox">
            <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
            <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
            <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
          </SegmentedControl.Root>
          <Section flexShrink="0" flexGrow={"1"}>
            <Tabs.Root defaultValue="account">
              <Tabs.List>
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
              </Tabs.List>

              <Box pt="3">
                <Tabs.Content value="account">
                  <Text size="2">Make changes to your account.</Text>
                </Tabs.Content>

                <Tabs.Content value="documents">
                  <Text size="2">Access and update your documents.</Text>
                </Tabs.Content>

                <Tabs.Content value="settings">
                  <Text size="2">
                    Edit your profile or update contact information.
                  </Text>
                </Tabs.Content>
              </Box>
            </Tabs.Root>
          </Section>
          <TextArea placeholder="Reply to comment…" />
          <TextField.Root placeholder="Search the docs…">
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
          <Section>
            <Flex gap="2">
              <IconButton onClick={() => setTheme("light")}>
                <SunIcon width="18" height="18" />
              </IconButton>

              <IconButton onClick={() => setTheme("dark")}>
                <MoonIcon width="18" height="18" />
              </IconButton>
            </Flex>
          </Section>

          <Card>
            <DataList.Root>
              <DataList.Item align="center">
                <DataList.Label minWidth="88px">Status</DataList.Label>
                <DataList.Value>
                  <Badge color="jade" variant="soft" radius="full">
                    Authorized
                  </Badge>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">ID</DataList.Label>
                <DataList.Value>
                  <Flex align="center" gap="2">
                    <Code variant="ghost">u_2J89JSA4GJ</Code>
                    <IconButton
                      size="1"
                      aria-label="Copy value"
                      color="gray"
                      variant="ghost"
                    >
                      <CopyIcon />
                    </IconButton>
                  </Flex>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Name</DataList.Label>
                <DataList.Value>Vlad Moroz</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Email</DataList.Label>
                <DataList.Value>
                  <Link href="mailto:vlad@workos.com">vlad@workos.com</Link>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Company</DataList.Label>
                <DataList.Value>
                  <Link target="_blank" href="https://workos.com">
                    WorkOS
                  </Link>
                </DataList.Value>
              </DataList.Item>
            </DataList.Root>
          </Card>
          <Flex direction="column" gap="4">
            <Blockquote>
              Perfect typography is certainly the most elusive of all arts.
              Sculpture in stone alone comes near it in obstinacy.
            </Blockquote>

            <Callout.Root>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                You will need admin privileges to install and access this
                application.
              </Callout.Text>
            </Callout.Root>
          </Flex>
        </Grid>
      </Container>
    </main>
  );
}
