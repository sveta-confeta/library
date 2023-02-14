import axios from "axios";

export const instance = axios.create({
    withCredentials: false,
    baseURL:'https://strapi.cleverland.by/api/',
})



export const libraryApi = {
    getBooks() {
        return instance.get<BookType[]>(`books`)
    },
    getBook(id:number) {
        return instance.get<BookType>(`books/${id}`)
    },
    getCategories() {
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
    image:imageBook
    categories: string[]
    comments: null
    booking: null
    delivery: null | {dateHandedFrom:string}
    histories: null
}

export type imageBook={
    url:string
}
