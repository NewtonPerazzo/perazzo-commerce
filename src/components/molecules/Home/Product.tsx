import { Text } from "@/components/atoms/Text";
import { IProduct } from "@/models/product/product"
import { Colors } from "@/styles/colors";
import { Box } from "@mui/material";

interface ProductProps {
    product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
    return (
        <Box
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
                cursor: 'pointer'
            }}
        >
            <Box sx={{
                    height: '100%',
                    width: '100%',
                    backgroundImage: product.image,
                    backgroundColor: Colors.pink.bg,
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                }}
            />
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
                    ? <Text style={{ textDecoration: "line-through", textAlign: 'center' }} size="12px" value={`R$ ${product.price.toFixed(2)}`} />
                    : <div style={{ height: 15 }} />
                }
                <Text style={{ fontWeight: '700', textAlign: 'center' }} size="18px" value={`R$ ${(product.promotionalPrice || product.price).toFixed(2)}`} />
            </Box>
        </Box>
    )
}