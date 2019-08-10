declare @Normal int = 1,@Fire int = 2,@Fighting int = 3,@Water int = 4,@Flying int = 5,@Grass int = 6,@Poison int = 7,@Electric int = 8,@Ground int = 9,@Psychic int = 10,@Rock int = 11,@Ice int = 12,@Bug int = 13,@Dragon int = 14,@Ghost int = 15,@Dark int = 16,@Steel int = 17,@Fairy int = 18
select atk.[Name] as [AtkType],def.[Name] as [DefType],b.Damage
from Battle b join [Type] atk on b.AttackMoveTypeId = atk.Id join [Type] def on b.DefenderMonoTypeId = def.Id
where atk.Id in (@Dragon)
--and def.Id in (@Rock,@Ice,@Dragon,@Fairy)
and Damage <= 1
order by AtkType,Damage