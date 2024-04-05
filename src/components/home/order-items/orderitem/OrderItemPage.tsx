import { OrderItemData } from "./OrderItemData";
import OrderItemCard from "./OrderItemCard";
export default function OrderItemPage() {
  return (
    <>
      {OrderItemData.map((item, index) => {
        return <OrderItemCard itemO={item} key={index} />;
      })}
    </>
  );
}
