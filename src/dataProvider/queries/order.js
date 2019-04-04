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
            mutation editProduct($id: ID!, $title: productTitleEditInput, $descriptionShort: productDescriptionShortEditInput, $descriptionLong: productDescriptionLongEditInput, $weight: Int, $amount: Int, $available: Boolean, $imgSmall: [String], $imgBig: [String], $price: Float){
                editProduct(id: $id, title: $title, descriptionShort: $descriptionShort, descriptionLong: $descriptionLong, weight: $weight, amount: $amount, available: $available, imgSmall: $imgSmall, imgBig: $imgBig, price: $price) {
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
        variables: { 
            id: params.id,
            title: { en: params.data.titleEn, est: params.data.titleEst, rus: params.data.titleRus },
            descriptionShort: { en: params.data.descriptionShortEn, est: params.data.descriptionShortEst, rus: params.data.descriptionShortRus },
            descriptionLong: { en: params.data.descriptionLongEn, est: params.data.descriptionLongEst, rus: params.data.descriptionLongRus },
            amount: params.data.amount,
            available: params.data.available,
            imgSmall: params.data.imgSmall,
            imgBig: params.data.imgBig,
            price: params.data.price,
        }
    }),
    CREATE: (params) => ({
        query: `
            mutation addProduct($title: productTitleAddInput, $descriptionShort: productDescriptionShortAddInput, $descriptionLong: productDescriptionLongAddInput, $weight: Int, $amount: Int, $available: Boolean, $imgSmall: [String], $imgBig: [String], $price: Float!){
                addProduct(title: $title, descriptionShort: $descriptionShort, descriptionLong: $descriptionLong, weight: $weight, amount: $amount, available: $available, imgSmall: $imgSmall, imgBig: $imgBig, price: $price) {
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
        variables: { 
            title: { en: params.data.titleEn, est: params.data.titleEst, rus: params.data.titleRus },
            descriptionShort: { en: params.data.descriptionShortEn, est: params.data.descriptionShortEst, rus: params.data.descriptionShortRus },
            descriptionLong: { en: params.data.descriptionLongEn, est: params.data.descriptionLongEst, rus: params.data.descriptionLongRus },
            amount: params.data.amount,
            available: params.data.available,
            imgSmall: params.data.imgSmall,
            imgBig: params.data.imgBig,
            price: params.data.price,
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