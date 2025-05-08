import { PageBox } from "@/components/atoms/PageBox";
import { PageColumn } from "@/components/atoms/PageColumn";
import { Text } from "@/components/atoms/Text";

export default function Cart() {
  return (
    <PageBox>
      <PageColumn>
        <Text variant="h1" value="Cart" />
      </PageColumn>
    </PageBox>
  );
}
