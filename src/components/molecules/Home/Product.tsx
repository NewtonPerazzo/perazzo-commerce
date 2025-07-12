import { Text } from "@/components/atoms/Text";
import { IProduct } from "@/models/product/product"
import { decrement, increment } from "@/store/cart/cartSlice";
import { useAppSelector } from "@/store/hooks";
import { Colors } from "@/styles/colors";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

interface ProductProps {
    product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
    const router = useRouter();
    const { count, items } = useAppSelector(state => state.cart)
    const dispatch = useDispatch();

    const handleNavigate = () => {
        router.push(`/product/${product.id}`);
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        dispatch(increment(product));
        e.stopPropagation();
        e.preventDefault();
    };

    const handleRemoveToCart = (e: React.MouseEvent) => {
        dispatch(decrement(product));
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <Box
            onClick={handleNavigate}
            sx={{
                width: 120,
                height: 194,
                backgroundColor: Colors.white.default,
                border: 1,
                borderColor: Colors.pink.bg,
                borderRadius: 2,
                justifyContent: 'space-between',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                position: "relative",
                zIndex: 0
            }}
        >
             {Boolean(items?.find((item) => item.item.id === product.id) && count) && (
                <Box
                    sx={{
                        position: 'absolute',
                        right: -1,
                        top: -1,
                        backgroundColor: Colors.white.default,
                        padding: "7px",
                        color: Colors.pink.font,
                        border: 1,
                        borderColor: Colors.pink.bg,
                        borderRadius: "4px"
                    }}
                >
                    <Text variant="h1" value={items.find((item) => item.item.id === product.id)!.count} />
                </Box>
            )}
            <Box 
                sx={{
                    height: '100%',
                    width: '100%',
                    backgroundImage: product.image,
                    backgroundColor: Colors.pink.bg,
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                }}
            />
            {Boolean(items?.find((item) => item.item.id === product.id) && count) && (
                <Button 
                    variant="contained" 
                    sx={{
                        backgroundColor: Colors.pink.font,
                        zIndex: 10,
                        position: 'absolute',
                        left: 0,
                        padding: "2px",
                        bottom: 85,
                    }}
                    onClick={handleRemoveToCart}
                >
                    -
                </Button>
            )}
            <Button 
                variant="contained" 
                sx={{
                    backgroundColor: Colors.pink.font,
                    zIndex: 10,
                    position: 'absolute',
                    right: 0,
                    bottom: 85,
                    padding: "2px",
                }}
                onClick={handleAddToCart}
            >
                +
            </Button>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: '100%',
                padding: 1
            }}>
                <Text 
                    style={{
                        width: 100,
                        fontWeight: '600',
                        textAlign: 'center',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2
                    }}
                    size="16px" 
                    value={product.name} 
                />

                {product.promotionalPrice 
                    ? <Text 
                        style={{ textDecoration: "line-through", textAlign: 'center' }} 
                        size="12px" 
                        value={`R$ ${product.price.toFixed(2)}`} 
                    />
                    : <div style={{ height: 15 }} />
                }
                <Text style={{ fontWeight: '700', textAlign: 'center' }} size="18px" value={`R$ ${(product.promotionalPrice || product.price).toFixed(2)}`} />
            </Box>
        </Box>
    )
}