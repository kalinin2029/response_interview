--создадим таблицы
create table users (
    id varchar(10) Primary Key,
    name text
)

create table stat (
    id_user varchar(10),
    rank int
)

--заполним их
insert into users(id,name)
values('A','name1')
     ,('B','name2')

insert into stat(id_user,rank)
values('A',10)
     ,('A',12)
     ,('A',11)
     ,('C',10)