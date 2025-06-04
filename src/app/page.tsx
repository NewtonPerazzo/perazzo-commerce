import { PageBox } from "@/components/atoms/PageBox";
import { Text } from "@/components/atoms/Text";
import { LazyLoading } from "@/components/molecules/LazyLoading/LazyLoading";
import { ProductHome } from "@/components/organisms/product/ProductHome"
import Hydrater from "@/hydrater/Hydrater";
import { SSRFetchProducts } from "@/store/ssr/product/fetchProductsSSR";

export default async function Home() {
  const { items, loading } = await SSRFetchProducts();

  return (
    <>
      <Hydrater data={items} action="setProducts" />
      <PageBox>
        {loading ? <LazyLoading /> :
          <div>
            <Text variant="h1" value="Bem-vindo(a) ao meu mundo doce" />
            <ProductHome items={items} />
          </div>
        }
      </PageBox>
    </>
  );
}