import { PageBox } from "@/components/atoms/PageBox";
import { PageColumn } from "@/components/atoms/PageColumn";
import { Text } from "@/components/atoms/Text";

export default function Product({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <PageBox>
      <PageColumn>
        <Text variant="h1" value={`Product ${id}`} />
      </PageColumn>
    </PageBox>
  );
}
