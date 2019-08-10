declare @Normal int = 1,@Fire int = 2,@Fighting int = 3,@Water int = 4,@Flying int = 5,@Grass int = 6,@Poison int = 7,@Electric int = 8,@Ground int = 9,@Psychic int = 10,@Rock int = 11,@Ice int = 12,@Bug int = 13,@Dragon int = 14,@Ghost int = 15,@Dark int = 16,@Steel int = 17,@Fairy int = 18
declare @type1 int = @Dragon,@type2 int = @Flying

select atk.Id,atk.Name,b.Damage
into #t1
from Battle b join [Type] def on b.DefenderMonoTypeId=def.Id join [Type] atk on b.AttackMoveTypeId = atk.Id
where (def.Id=@type1)

select atk.Id,atk.Name,b.Damage
into #t2
from Battle b join [Type] def on b.DefenderMonoTypeId=def.Id join [Type] atk on b.AttackMoveTypeId = atk.Id
where (def.Id=@type2)

select #t1.Id,#t1.[Name],#t1.Damage*#t2.Damage as [Damage]
into #t3
from #t1 join #t2 on #t1.Id = #t2.Id

select * from #t3
where #t3.Damage > 1
go
drop table #t1;drop table #t2;drop table #t3