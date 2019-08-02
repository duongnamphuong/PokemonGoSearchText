declare @type1 varchar(12) = 'dragon',@type2 nvarchar(12) = 'flying'

select atk.Id,atk.Name,b.Damage
into #t1
from Battle b join [Type] def on b.DefenderMonoTypeId=def.Id join [Type] atk on b.AttackMoveTypeId = atk.Id
where (def.Name=@type1)

select atk.Id,atk.Name,b.Damage
into #t2
from Battle b join [Type] def on b.DefenderMonoTypeId=def.Id join [Type] atk on b.AttackMoveTypeId = atk.Id
where (def.Name=@type2)

select #t1.Id,#t1.[Name],#t1.Damage*#t2.Damage as [Damage]
into #t3
from #t1 join #t2 on #t1.Id = #t2.Id

select * from #t3
where #t3.Damage >= 2
go
drop table #t1;drop table #t2;drop table #t3