import axios from "axios";

export const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://strapi.cleverland.by/api/',
})


export const libraryApi = {
    getBooks() {
        return instance.get<BookType[]>(`books`)
    },
    getBook(id: number) {
        return instance.get<CurrentBookType>(`books/${id}`)

    },
    getCategories() {
        return instance(`categories`)
    }
}


export type BookType = {
    id: number
    title: string
    rating?: number
    issueYear: string
    description: string
    publish: string
    pages: string
    cover: string
    weight: string
    format: string
    ISBN: string
    producer: string
    authors: string[]
    image: imageBook
    categories: string[]
    comments: null
    booking: null
    delivery: null | { dateHandedFrom: string }
    histories: null
}


export type imageBook = {
    url: string
}
export type CurrentBookType = {
    id: number
    title: string
    rating?: number
    issueYear: string
    description: string
    publish: string
    pages: string
    cover: string
    weight: string
    format: string
    ISBN: string
    producer: string
    authors: string[]
    images: imageBook[]
    categories: string[]
    comments?: CommentsPost[]
    booking: {
        id: number
        order: boolean
        dateOrder: string
        customerId: number
        customerFirstName: string
        customerLastName: string

    }
    delivery: {
        id: number
        handed: boolean
        dateHandedFrom: string
        dateHandedTo: string
        recipientId: number
        recipientFirstName: string
        recipientLastName: string
    },

    histories: HistoriesPost[]
}

export type CommentsPost = {
    id: number
    raiting: number
    text: string
    createdAt: string
    user: {
        commentUserId: number
        firstName: string
        lastName: string
        avatarUrl: string
    }
}

export type HistoriesPost = {
    id: number
    userId: number
}

export type ErrorType = {
    status: number
    name: string
    message: string
    "details": {}

}
export type  CategoriesType={
    name:string
    path:string
    id: number
}



