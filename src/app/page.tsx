import { PageBox } from "@/components/atoms/PageBox";
import { PageColumn } from "@/components/atoms/PageColumn";
import { Text } from "@/components/atoms/Text";

export default function Home() {
  return (
    <PageBox>
      <PageColumn>
        <Text variant="h1" value="Home" />
      </PageColumn>
    </PageBox>
  );
}
