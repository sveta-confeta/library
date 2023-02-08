import {RaitingValueType} from '../common/raiting/raiting';
import {ReviewType} from '../pages/book/reviews/review/review';

import img from './image.jpg'

type GenreBookType={
    id:number
    genre:string
    count?:number
    param?:string

}
export type BooksType={
    id:string,
    image:string[],
    category: string,
    author: string,
    title: string,
    rating: RaitingValueType,
    year: number,
    isBooked: boolean,
    bookedTill: string,
}

export const readers:ReviewType[]=[{
    readerName:'Иван Иванов',
    data:'5 января 2019',
    raiting:4,
    text:''
},
    {
        readerName:'Николай Качков',
        data:'20 июня 2018',
        raiting:4,
        text:'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.'
    },
    {
        readerName:'Екатерина Беляева',
        data:'18 февраля 2018',
        raiting:4,
        text:''

    }]
export const genresOfBooks:GenreBookType[]=[
    {'id':15, 'genre':'Все книги','param': 'all'},
    {'id':1,'genre':'Бизнес-книги',count:14,'param': 'business'},
    {'id':2,'genre':' Детективы',count:8,'param': 'detectives'},
    {'id':3,'genre':'Детские книги',count:14,'param': 'childish'},
    {'id':4,'genre':'Зарубежная литература',count:2,'param': 'foreign'},
    {'id':5,'genre':'История',count:5,'param': 'history'},
    {'id':6,'genre':'Классическая литература',count:12,'param': 'classic'},
    {'id':7,'genre':'Книги по психологии',count:11,'param': 'psychology'},
    {'id':8,'genre':'Компьютерная литература',count:54,'param': 'сomputer'},
    {'id':9,'genre':'Культура и искусство',count:5,'param': 'culture'},
    {'id':10,'genre':'Наука и образование',count:2,'param': 'science'},
    {'id':11,'genre':'Публицистическая  литература',count:0,'param': 'public'},
    {'id':12,'genre':'Справочники',count:10,'param': 'references'},
    {'id':13,'genre':'Фантастика',count:12,'param': 'fantastic'},
    {'id':14,'genre':'Юмористическая литература',count:8,'param': 'humor'},
]
export const books:BooksType[]=[
 {
     'id': '63ca7627f79ebdac69926ffc',
     'image': [],
     'category': 'business',
     'author': 'Адитья Бхаргава',
     'title': 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
     'rating': 0,
     'year': 2019,
     'isBooked': false,
     'bookedTill': ''
 },
 {
     'id': '63ca7627549c20ea76acb8fc',
     'image':[img],
     'category': 'business',
     'author': 'Lenore Delaney',
     'title': 'Грокаем алгоритмы. Иллюстрированное',
     'rating': 4,
     'year':  2019,
     'isBooked': false,
     'bookedTill': ''
 },
 {
     'id': '63ca762761ae79531f1acb53',
     'image': [img,img,"https://swiperjs.com/demos/images/nature-1.jpg","https://swiperjs.com/demos/images/nature-2.jpg",
         "https://swiperjs.com/demos/images/nature-5.jpg"],
     'category': 'business',
     'author': 'Katie Terry',
     'title': 'Грокаем алгоритмы',
     'rating': 4,
     'year':  2019,
     'isBooked': true,
     'bookedTill': '23.04'
 },
 {
     'id': '63ca7627eab55a2591cefaac',
     'image': [img,img,"https://swiperjs.com/demos/images/nature-1.jpg","https://swiperjs.com/demos/images/nature-2.jpg",
         "https://swiperjs.com/demos/images/nature-5.jpg"],
     'category': 'business',
     'author': 'Tucker Langley',
     'title': 'Riverdale Avenue, Hendersonville, Michigan',
     'rating': 4,
     'year': 1929,
     'isBooked': false,
     'bookedTill': ''
 },
 {
     'id': '63ca7627db47f2a9cf5abfee',
     'image': [img,img,"https://swiperjs.com/demos/images/nature-1.jpg","https://swiperjs.com/demos/images/nature-2.jpg",
         "https://swiperjs.com/demos/images/nature-5.jpg"],
     'category': 'business',
     'author': 'Watkins Watts',
     'title': 'Lafayette Walk, Felt, Pennsylvania',
     'rating': 2,
     'year': 1983,
     'isBooked': false,
     'bookedTill': ''
 },
 {
     'id': '63ca76278e7bae49e60cc08f',
     'image':[],
     'category': 'business',
     'author': 'Jocelyn Benjamin',
     'title': 'Hillel Place, Lydia, California',
     'rating': 0,
     'year': 2014,
     'isBooked': false,
     'bookedTill': '23.04'
 },
 {
     'id': '63ca76277acbfd2757ff0e87',
     'image': [img],
     'category': 'business',
     'author': 'Lola Andrews',
     'title': 'Exeter Street, Linwood, South Dakota',
     'rating': 4,
     'year': 1970,
     'isBooked': false,
     'bookedTill': ''
 },
 {
     'id': '63ca76279b279b3f88322e2e',
     'image': [img,img,"https://swiperjs.com/demos/images/nature-1.jpg","https://swiperjs.com/demos/images/nature-2.jpg",
         "https://swiperjs.com/demos/images/nature-5.jpg"],
     'category': 'business',
     'author': 'Marylou Burton',
     'title': 'Dictum Court, Witmer, Puerto Rico',
     'rating': 1,
     'year': 1973,
     'isBooked': false,
     'bookedTill': ''
 },
 {
     'id': '63ca7627b50fe16d3ce08a55',
     'image': [img],
     'category': 'business',
     'author': 'Janie Roman',
     'title': 'McKibben Street, Harrison, Kentucky',
     'rating': 3,
     'year': 1971,
     'isBooked': true,
     'bookedTill': ''
 },
 {
     'id': '63ca76271344102600937710',
     'image': [],
     'category': 'business',
     'author': 'Shana Duke',
     'title': 'Hendrix Street, Thermal, Virgin Islands',
     'rating': 2,
     'year': 1903,
     'isBooked': true,
     'bookedTill': ''
 },

 ]
