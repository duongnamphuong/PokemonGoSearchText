declare @Normal int = 1,@Fire int = 2,@Fighting int = 3,@Water int = 4,@Flying int = 5,@Grass int = 6,@Poison int = 7,@Electric int = 8,@Ground int = 9,@Psychic int = 10,@Rock int = 11,@Ice int = 12,@Bug int = 13,@Dragon int = 14,@Ghost int = 15,@Dark int = 16,@Steel int = 17,@Fairy int = 18
declare @type1 int = @Flying
select atk.Id,atk.Name,b.Damage
from Battle b join [Type] def on b.DefenderMonoTypeId=def.Id join [Type] atk on b.AttackMoveTypeId = atk.Id
where (def.Id=@type1)
and b.Damage>1
order by b.Damage desc