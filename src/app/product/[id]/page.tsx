import { PageBox } from "@/components/atoms/PageBox";
import { PageColumn } from "@/components/atoms/PageColumn";
import { LazyLoading } from "@/components/molecules/LazyLoading/LazyLoading";
import { ProductDetail } from "@/components/organisms/product/ProductDetail";
import Hydrater from "@/hydrater/Hydrater";
import { SSRFetchProductByID } from "@/store/ssr/product/fetchProductByIDSSR";

export default async function Product({ params }: { params: { id: string } }) {
  const { product, loading } = await SSRFetchProductByID(params.id ?? "");

  return (
    <>
      <Hydrater data={product} action="setProductByID" />
      <PageBox>
        {loading ? <LazyLoading /> :
          <PageColumn>
            <ProductDetail product={product} />
          </PageColumn>
        }
      </PageBox>
    </>
  );
}
