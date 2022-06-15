export type FaqCategoryEntity  = {
    data :{
        id: number,
        attributes: {
            title: string,
            description: string,
            updatedAt: Date
        }
    }
}

export type FaqQuestionEntity = {
    data :{
        id: number,
        attributes: {
            title: string,
            short_description: string,
            description: string,
            updatedAt: Date
        }
    }
}