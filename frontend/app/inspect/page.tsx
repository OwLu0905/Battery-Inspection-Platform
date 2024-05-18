import { DropFile } from "@/components/drop-file";
import { Container, Select } from "@radix-ui/themes";

export default function InspectPage() {
  return (
    <Container className="pt-12" size={{ initial: "1", sm: "2", lg: "4" }}>
      <DropFile />
    </Container>
  );
}
