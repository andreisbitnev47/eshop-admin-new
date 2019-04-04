export default {
    GET_LIST: (params) => ({
        query: `
            query getImages{
                images
            }
        
        `,
        variables: {}
    }),
    DELETE: ({ id }) => ({
        query: `
        mutation deleteImage($id: String!) {
            deleteImage(id: $id) {
              image
            }
          }
        `,
        variables: { id }
    }),
    DELETE_MANY: ({ ids }) => ({
        query: `
        mutation deleteImages($ids: [String]!) {
            deleteImages(ids: $ids) {
              images
            }
          }
        `,
        variables: { ids }
    })
}