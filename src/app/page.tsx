import { PageBox } from "@/components/atoms/PageBox";
import { PageColumn } from "@/components/atoms/PageColumn";
import { Text } from "@/components/atoms/Text";
import { ProductHome } from "@/components/organisms/product/ProductHome"
import Hydrater from "@/hydrater/Hydrater";
import { SSRFetchProducts } from "@/store/ssr/product/fetchProductsSSR";

export default async function Home() {
  const { items, loading } = await SSRFetchProducts();

  return (
    <>
      <Hydrater data={items} action="setProducts" />
      <PageBox>
        <PageColumn>
          <Text variant="h1" value="Home" />
          <ProductHome items={items} loading={loading} />
        </PageColumn>
      </PageBox>
    </>
  );
}
