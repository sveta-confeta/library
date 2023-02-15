




type GenreBookType={
    id:number
    genre:string
    count?:number
    param?:string

}

export const genresOfBooks:GenreBookType[]=[
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

