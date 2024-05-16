import React from "react";
import {
  Blockquote,
  Card,
  Container,
  Flex,
  Section,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <Section m="10">
      <Container>
        <Flex direction="column" gap="9" align="center">
          <Text size="8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            magni.
          </Text>
          <Blockquote>
            <Text size="5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              voluptate pariatur rem veniam dignissimos consectetur nulla totam
              impedit aperiam repudiandae! Voluptates deleniti at cumque
              reprehenderit facilis tempore, sed perspiciatis non.
            </Text>
          </Blockquote>
          <Card>
            <Image
              src="/img1.png"
              width={400}
              height={300}
              alt="charging time"
              className="object-fit"
            />
          </Card>
        </Flex>
      </Container>
    </Section>
  );
}
