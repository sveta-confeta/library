import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL:'https://strapi.cleverland.by/api/',
})



export const libraryApi = {
    getBooks() {
        return instance.get<BookType[]>(`books`)
    },
    getBook() {
        return instance.get(`books/${1}`)
    },
    getcategories() {
        return instance(`categories`)
    }
}

export type BookType = {
    id: number
    title: string
    rating: null
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
    images: [{ url: string }]
    categories: string[],
    comments: null
    booking: null
    delivery: null
    histories: null
}
