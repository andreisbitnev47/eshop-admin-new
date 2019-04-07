export default {
    GET_LIST: (params) => ({
        query: `
            query getContents{
                contents {
                    id
                    handle
                    group
                    titleEn: title(language: "en")
                    titleEst: title(language: "est")
                    titleRus: title(language: "rus")
                    subTitleEn: subTitle(language: "en")
                    subTitleEst: subTitle(language: "est")
                    subTitleRus: subTitle(language: "rus")
                    paragraphEn: paragraph(language: "en")
                    paragraphEst: paragraph(language: "est")
                    paragraphRus: paragraph(language: "rus")
                    spanEn: span(language: "en")
                    spanEst: span(language: "est")
                    spanRus: span(language: "rus")
                    imgAll {
                        url
                        alt {
                            en
                            est
                            rus
                        }
                    }
                }
            }
        
        `,
        variables: {}
    }),
    GET_ONE: (params) => ({
        query: `
            query getContent($id: ID!){
                content(id: $id) {
                    id
                    handle
                    group
                    titleEn: title(language: "en")
                    titleEst: title(language: "est")
                    titleRus: title(language: "rus")
                    subTitleEn: subTitle(language: "en")
                    subTitleEst: subTitle(language: "est")
                    subTitleRus: subTitle(language: "rus")
                    paragraphEn: paragraph(language: "en")
                    paragraphEst: paragraph(language: "est")
                    paragraphRus: paragraph(language: "rus")
                    spanEn: span(language: "en")
                    spanEst: span(language: "est")
                    spanRus: span(language: "rus")
                    imgAll {
                        url
                        alt {
                            en
                            est
                            rus
                        }
                    }
                }
            }
        
        `,
        variables: { id: params.id}
    }),
    UPDATE: (params) => ({
        query: `
            mutation editContent($id: ID!, $title: [contentTitleEditInput], $subTitle: [contentSubTitleEditInput], $paragraph: [contentParagraphEditInput], $img: [contentImgEditInput]){
                editContent(id: $id, title: $title, subTitle: $subTitle, paragraph: $paragraph, img: $img, span: [], link: []) {
                    content {
                        id
                        handle
                        group
                        titleEn: title(language: "en")
                        titleEst: title(language: "est")
                        titleRus: title(language: "rus")
                        subTitleEn: subTitle(language: "en")
                        subTitleEst: subTitle(language: "est")
                        subTitleRus: subTitle(language: "rus")
                        paragraphEn: paragraph(language: "en")
                        paragraphEst: paragraph(language: "est")
                        paragraphRus: paragraph(language: "rus")
                        spanEn: span(language: "en")
                        spanEst: span(language: "est")
                        spanRus: span(language: "rus")
                        imgAll {
                            url
                            alt {
                                en
                                est
                                rus
                            }
                        }
                    }
                }
            }
        `,
        variables: { 
            id: params.id,
            title: params.data.titleEn.map((titleEn, index) => ({ en: titleEn, est: params.data.titleEst[index], rus: params.data.titleRus[index]})),
            subTitle: params.data.subTitleEn.map((subTitleEn, index) => ({ en: subTitleEn, est: params.data.subTitleEst[index], rus: params.data.subTitleRus[index]})),
            paragraph: params.data.paragraphEn.map((paragraphEn, index) => ({ en: paragraphEn, est: params.data.paragraphEst[index], rus: params.data.paragraphRus[index]})),
            img: params.data.imgAll,
        }
    }),
    CREATE: (params) => ({
        query: `
            mutation addProduct($title: productTitleAddInput, $descriptionShort: productDescriptionShortAddInput, $descriptionLong: productDescriptionLongAddInput, $weight: Int, $amount: Int, $available: Boolean, $imgSmall: [String], $imgBig: [String], $price: Float!){
                addProduct(title: $title, descriptionShort: $descriptionShort, descriptionLong: $descriptionLong, weight: $weight, amount: $amount, available: $available, imgSmall: $imgSmall, imgBig: $imgBig, price: $price) {
                    content {
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