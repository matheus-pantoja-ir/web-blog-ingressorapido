import {useQuery} from "react-query";
import {gqlClient} from "../../../config/GraphQL.config";
import {categoriesQuery, questionQuery, questionsByCategoryQuery} from "../constants/query";
import {FaqCategoryEntity} from "../types/types";
import {gql} from "graphql-request";

export const useFAQCategories = () => {
    return useQuery('categories', async () => {
        const {faqCategories: {data}} = await gqlClient.request(categoriesQuery)
        return data
    })
}

export const useFAQQuestionsCategory = (id?: string) => {
    return useQuery('questions_category', async () => {
        const {faqCategory, faqQuestions} = await gqlClient.request(questionsByCategoryQuery, {id})
        const category: FaqCategoryEntity = faqCategory
        return {
            category: {
                title: category.data.attributes.title,
                description: category.data.attributes.description,
                updatedAt: category.data.attributes.updatedAt,
            },
            questions: faqQuestions
        }
    })
}

export const useFAQQuestion = (id?: string) => {
    return useQuery(`question_${id}`, async () => {
        const {faqQuestion} = await gqlClient.request(questionQuery, {id})
        const updatedAtLocalized = new Date(faqQuestion.data.attributes.updatedAt).toLocaleDateString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        return {
            ...faqQuestion.data.attributes,
            updatedAt: updatedAtLocalized
        }
    })
}