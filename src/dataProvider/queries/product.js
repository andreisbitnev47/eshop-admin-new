export default {
    GET_LIST: (params) => ({
        query: `
            query getProducts{
                products {
                    id
                    titleEn: title(language: "en")
                    titleEst: title(language: "est")
                    titleRus: title(language: "rus")
                    descriptionLongEn: descriptionLong(language: "en")
                    descriptionLongEst: descriptionLong(language: "est")
                    descriptionLongRus: descriptionLong(language: "rus")
                    handle
                    amount
                    available
                    imgBig
                    price
                    featured
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
                    descriptionLongEn: descriptionLong(language: "en")
                    descriptionLongEst: descriptionLong(language: "est")
                    descriptionLongRus: descriptionLong(language: "rus")
                    handle
                    amount
                    available
                    imgBig
                    price
                    featured
                }
            }
        
        `,
        variables: { id: params.id}
    }),
    UPDATE: (params) => ({
        query: `
            mutation editProduct($id: ID!, $title: productTitleEditInput, $descriptionLong: productDescriptionLongEditInput, $weight: Int, $amount: Int, $available: Boolean, $imgBig: [String], $price: Float, $handle: String, $featured: Boolean!){
                editProduct(id: $id, title: $title, descriptionLong: $descriptionLong, weight: $weight, amount: $amount, available: $available, imgBig: $imgBig, price: $price, handle: $handle, featured: $featured) {
                    product {
                        id
                        titleEn: title(language: "en")
                        titleEst: title(language: "est")
                        titleRus: title(language: "rus")
                        descriptionLongEn: descriptionLong(language: "en")
                        descriptionLongEst: descriptionLong(language: "est")
                        descriptionLongRus: descriptionLong(language: "rus")
                        handle
                        amount
                        available
                        imgBig
                        price
                        featured
                    }
                }
            }
        `,
        variables: { 
            id: params.id,
            title: { en: params.data.titleEn, est: params.data.titleEst, rus: params.data.titleRus },
            descriptionLong: { en: params.data.descriptionLongEn, est: params.data.descriptionLongEst, rus: params.data.descriptionLongRus },
            amount: params.data.amount,
            available: params.data.available,
            imgBig: params.data.imgBig,
            price: params.data.price,
            handle: params.data.handle,
            featured: params.data.featured,
        }
    }),
    CREATE: (params) => ({
        query: `
            mutation addProduct($title: productTitleAddInput, $descriptionLong: productDescriptionLongAddInput, $weight: Int, $amount: Int, $available: Boolean, $imgBig: [String], $price: Float!, $featured: Boolean!){
                addProduct(title: $title, descriptionLong: $descriptionLong, weight: $weight, amount: $amount, available: $available, imgBig: $imgBig, price: $price, featured: $featured) {
                    product {
                        id
                        titleEn: title(language: "en")
                        titleEst: title(language: "est")
                        titleRus: title(language: "rus")
                        descriptionLongEn: descriptionLong(language: "en")
                        descriptionLongEst: descriptionLong(language: "est")
                        descriptionLongRus: descriptionLong(language: "rus")
                        handle
                        amount
                        available
                        imgBig
                        price
                        featured
                    }
                }
            }
        `,
        variables: { 
            title: { en: params.data.titleEn, est: params.data.titleEst, rus: params.data.titleRus },
            descriptionLong: { en: params.data.descriptionLongEn, est: params.data.descriptionLongEst, rus: params.data.descriptionLongRus },
            amount: params.data.amount,
            available: params.data.available,
            imgBig: params.data.imgBig,
            price: params.data.price,
            featured: params.data.featured,
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
                        descriptionLongEn: descriptionLong(language: "en")
                        descriptionLongEst: descriptionLong(language: "est")
                        descriptionLongRus: descriptionLong(language: "rus")
                        handle
                        amount
                        available
                        imgBig
                        price
                        featured
                    }
                }
            }
        
        `,
        variables: { id: params.id}
    }),
}