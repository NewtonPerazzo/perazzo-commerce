import { PageBox } from "@/components/atoms/PageBox";
import { PageColumn } from "@/components/atoms/PageColumn";
import { LazyLoading } from "@/components/molecules/LazyLoading/LazyLoading";
import { OrderDetail } from "@/components/organisms/order/OrderDetail";
import Hydrater from "@/hydrater/Hydrater";
import { SSRFetchOrder } from "@/store/ssr/order/fetchOrderSSR";

export default async function Order({ params }: { params: { id: string } }) {
  const { order, loading } = await SSRFetchOrder(params.id);

  return (
    <>
      <Hydrater data={order} action="setOrder" />
      <PageBox>
        {loading ? <LazyLoading /> :
          <PageColumn>
            <OrderDetail order={order} />
          </PageColumn>
        }
      </PageBox>
    </>
  );
}
