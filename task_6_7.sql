--первый вариант 
select
    u.id as 'id of user'
    ,u.name as 'Name of user'
    ,min(s.rank) as 'Min rank'
    ,max(s.rank) as 'Max rank' 
from users as u
left join stat as s on s.id_user=u.id -- некоторые пишут u.id=s.id_user, разницы нет. 
group by u.id, u,name

--второй вариант с with
with user_rank (
    select
         u.id
        ,u.name
        ,s.rank 
    from users as u
    left join stat as s on s.id_user=u.id 
    group by u.id, u,name
)

select 
     id as 'id of user'
    ,name as 'Name of user'
    ,rank as 'Current rank'
    ,min(rank) as 'Min rank'
    ,max(rank) as 'Max rank'
from user_rank
group by id, name, rank 