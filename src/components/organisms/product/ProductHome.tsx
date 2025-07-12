"use client";
import { Text } from "@/components/atoms/Text";
import { Product } from "@/components/molecules/Home/Product";
import { useProduct } from "@/hooks/product";
import { IProduct } from "@/models/product/product";
import { Box } from "@mui/material";

interface ProductHomeProps {
    items: IProduct[];
}

export const ProductHome = ({ items }: ProductHomeProps) => {
    const { productsByCategory } = useProduct({ products: items });
    const marginTopComponents = {
        xs: 2,
        sm: 2,
        md: 1,
        lg: 1
    }
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                marginTop: marginTopComponents,
            }}
        >
            {productsByCategory?.map((item) => (
                <Box 
                    key={item.category.id} 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        marginTop: 2
                    }}
                >
                    <Text value={item.category.name} />
                    <Box 
                        key={item.category.id} 
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            scrollbarWidth: 'none',
                            gap: 1,
                            marginTop: marginTopComponents,
                            overflowX: {
                                    xs: "auto",
                                    sm: "auto",
                                    md: "unset" 
                                },
                                flexWrap: {
                                    xs: "nowrap", 
                                    md: "wrap"
                                },
                            
                        }}
                    >
                        {item.items.map((product) => (
                            <Product product={product} key={product.id} />
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}