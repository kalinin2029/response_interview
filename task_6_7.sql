--первый вариант 
select
    u.id as 'id of user'
    ,u.name as 'Name of user'
    ,min(s.rank) as 'Min rank'
    ,max(s.rank) as 'Max rank' 
from users as u
left join stat as s on s.id_user=u.id -- некоторые пишут u.id=s.id_user, разницы нет. 
group by u.id, u,name

--второй вариант
select 
    u.id as "ID_User",
    u.name as "Name_User",
    coalesce(s.rank,0)as "Rank",
    min(coalesce(s.rank,0)) over(partition by u.id) as "Min_Rank",
    max(coalesce(s.rank,0)) over(partition by u.id) as "Max_Rank",
    round(avg(coalesce(s.rank,0)) over(partition by u.id)) as "Avg_rank"
from public."user" as u
left join public."stat" as s on s.id_user=u.id