export default {
    GET_LIST: (params) => ({
        query: `
            query getTranslations{
                translations {
                    id
                    key
                    en: translation(language: "en")
                    est: translation(language: "est")
                    rus: translation(language: "rus")
                }
            }
        `,
        variables: {}
    }),
    GET_ONE: (params) => ({
        query: `
            query getTranslation($id: ID!){
                translation(id: $id) {
                    id
                    key
                    en: translation(language: "en")
                    est: translation(language: "est")
                    rus: translation(language: "rus")
                }
            }
        `,
        variables: { id: params.id }
    }),
    UPDATE: (params) => ({
        query: `
            mutation editTranslation($id: ID!, $en: String, $est: String, $rus: String){
                editTranslation(id: $id, en: $en, est: $est, rus: $rus) {
                    translation {
                        id
                        key
                        en: translation(language: "en")
                        est: translation(language: "est")
                        rus: translation(language: "rus")
                    }
                }
            }
        `,
        variables: { id: params.id, en: params.data.en, est: params.data.est, rus: params.data.rus }
    }),
    CREATE: (params) => ({
        query: `
            mutation addTranslation($key: String!, $en: String!, $est: String!, $rus: String!){
                addTranslation(key: $key, en: $en, est: $est, rus: $rus) {
                    translation {
                        id
                        key
                        en: translation(language: "en")
                        est: translation(language: "est")
                        rus: translation(language: "rus")
                    }
                }
            }
        `,
        variables: { key: params.data.key, en: params.data.en, est: params.data.est, rus: params.data.rus }
    }),
    DELETE: (params) => ({
        query: `
            mutation deleteTranslation($id: ID!){
                deleteTranslation(id: $id) {
                    translation {
                        id
                        key
                        en: translation(language: "en")
                        est: translation(language: "est")
                        rus: translation(language: "rus")
                    }
                }
            }
        
        `,
        variables: { id: params.id}
    }),
}