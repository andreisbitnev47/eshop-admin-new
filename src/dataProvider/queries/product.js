export default {
    GET_LIST: (params) => ({
        query: `
            query getProducts{
                products {
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
                    imgBig
                    price
                }
            }
        
        `,
        variables: {}
    }),
    GET_ONE: (params) => ({
        query: `
            query getProduct($id: ID!){
                product(id: $id) {
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
                    imgBig
                    price
                }
            }
        
        `,
        variables: { id: params.id}
    }),
    UPDATE: (params) => ({
        query: `
            mutation editProduct($id: ID!, $title: productTitleEditInput, $descriptionShort: productDescriptionShortEditInput, $descriptionLong: productDescriptionLongEditInput, $weight: Int, $amount: Int, $available: Boolean, $imgBig: [String], $price: Float, $handle: String){
                editProduct(id: $id, title: $title, descriptionShort: $descriptionShort, descriptionLong: $descriptionLong, weight: $weight, amount: $amount, available: $available, imgBig: $imgBig, price: $price, handle: $handle) {
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
            imgBig: params.data.imgBig,
            price: params.data.price,
            handle: params.data.handle,
        }
    }),
    CREATE: (params) => ({
        query: `
            mutation addProduct($title: productTitleAddInput, $descriptionShort: productDescriptionShortAddInput, $descriptionLong: productDescriptionLongAddInput, $weight: Int, $amount: Int, $available: Boolean, $imgBig: [String], $price: Float!){
                addProduct(title: $title, descriptionShort: $descriptionShort, descriptionLong: $descriptionLong, weight: $weight, amount: $amount, available: $available, imgBig: $imgBig, price: $price) {
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
                        imgBig
                        price
                    }
                }
            }
        
        `,
        variables: { id: params.id}
    }),
}