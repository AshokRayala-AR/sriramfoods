import { z } from "zod";
export const OrderSchema = z.object({
    img : z.string(),
    itemTitle: z.string(),
    itemOfferAmount: z.number(),
    itemOriginalAmount: z.number(),
    offer: z.string(),
    itemMrpDescription: z.string(),
    starReviews: z.string(),
    size: z.string(),
    grams1: z.string(),
    grams2: z.string(),
    quantityDescription: z.string(),
    quantity: z.number(),
    usageNote: z.string(),
})
export type OrderType = z.infer<typeof OrderSchema>
export const OrderPropSchema = z.object({
    item: OrderSchema,
})
export type OrderPropType = z.infer<typeof OrderPropSchema>
export const SqCardSchema = z.object({
    id:z.optional(z.number()),
    img: z.string(),
    itemTitle: z.optional(z.string()),
    itemOfferAmount: z.number(),
    btntext: z.string(),
})
export type SqCardType = z.infer<typeof SqCardSchema>
export const SqCardPropSchema = z.object({
    item: SqCardSchema,
})
export type SqCardPropType = z.infer<typeof SqCardPropSchema>
export const ArrowPropSchema = z.object({
    item: z.any().optional(),
    quantity: z.number(),
    setQuantity: z.any(),
})
export type ArrowPropType = z.infer<typeof ArrowPropSchema>
export const OrderCardSchema = z.object({
    id: z.number(),
    img: z.string(),
    itemTitle: z.string(),
    itemOfferAmount: z.string(),
    itemOriginalAmount: z.string(),
    offer: z.string(),
    itemMrpDescription: z.string(),
    starReviews: z.string(),
    size: z.string(),
    grams1: z.string(),
    grams2: z.string(),
    quantityDescription: z.string(),
    quantity: z.number(),
    usageNote: z.string(),
})
export type OrderCardType = z.infer<typeof OrderCardSchema>;
export const OrderCardPropSchema = z.object({
    itemO: OrderCardSchema
})
export type OrderCardPropType = z.infer<typeof OrderCardPropSchema>
export interface CartItem {
    itemTitle: string;
    itemOfferAmount: number;
    quantity: number;
    amount?: number;
    id?: number;
    img?: string;
  }
  export interface CartState {
    items: CartItem[];
  }



export const navSchema = z.object({
  navLink: z.string(),
  route: z.string(),
});

export type NavTypes = z.infer<typeof navSchema>;


