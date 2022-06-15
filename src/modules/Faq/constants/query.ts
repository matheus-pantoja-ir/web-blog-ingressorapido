export const categoriesQuery = `
        query{
          faqCategories{
            data{
              id
              attributes {
                title,
                description
              }
            }
          }
        }
    `

export const questionsByCategoryQuery = `
    query($id: ID) {
      faqCategory(id: $id) {
        data {
          attributes {
            title
            description
          }
        }
      }
      faqQuestions(filters: { faq_category: { id: { eq: $id } } }) {
        data {
          id
          attributes {
            title
            short_description
          }
        }
      }
    }
`

export const questionQuery = `    
        query($id: ID) {
          faqQuestion(id: $id) {
            data {
              attributes {
                title
                description
                updatedAt
              }
            }
          }
        }
`