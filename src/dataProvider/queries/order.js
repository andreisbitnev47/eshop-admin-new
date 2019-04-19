export default {
    GET_LIST: (params) => ({
        query: `
            query getOrders{
                orders {
                    id
                    total
                    totalWithShipping
                    status
                    phone
                    user {
                        email
                    }
                    shippingProvider {
                        name
                        optionName
                        price
                        shippingProviderId
                        address: shippingProviderAddress
                    }
                    products {
                        productId
                        title
                        price
                        amount
                        total
                    }
                }
            }
        
        `,
        variables: {}
    }),
    GET_ONE: (params) => ({
        query: `
            query getOrder($id: ID!){
                order(id: $id) {
                    id
                    total
                    totalWithShipping
                    status
                    phone
                    user {
                        email
                    }
                    shippingProvider {
                        name
                        optionName
                        price
                        shippingProviderId
                        address: shippingProviderAddress
                    }
                    products {
                        productId
                        title
                        price
                        amount
                        total
                    }
                }
            }
        `,
        variables: { id: params.id}
    }),
    UPDATE: (params) => ({
        query: `
            mutation editOrder($id: ID!, $status: String!){
                editOrder(id: $id, status: $status) {
                    order {
                        id
                        total
                        totalWithShipping
                        status
                        phone
                        user {
                            email
                        }
                        shippingProvider {
                            name
                            optionName
                            price
                            shippingProviderId
                            address: shippingProviderAddress
                        }
                        products {
                            productId
                            title
                            price
                            amount
                            total
                        }
                    }
                }
            }
        `,
        variables: { 
            id: params.id,
            status: params.data.status,
        }
    }),
    DELETE: (params) => ({
        query: `
            mutation deleteProduct($id: ID!){
                deleteProduct(id: $id) {
                    product {
                        id
                        titleEn: title(language: "en")
                        titleEst: title(language: "est")
                        titleRus: title(language: "rus")
                        descriptionShortEn: descriptionShort(language: "en")
                        descriptionShortEst: descriptionShort(language: "est")
                        descriptionShortRus: descriptionShort(language: "rus")
                        descriptionLongEn: descriptionLong(language: "en")
                        descriptionLongEst: descriptionLong(language: "est")
                        descriptionLongRus: descriptionLong(language: "rus")
                        handle
                        amount
                        available
                        imgSmall
                        imgBig
                        price
                    }
                }
            }
        
        `,
        variables: { id: params.id}
    }),
}