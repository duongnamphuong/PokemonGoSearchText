declare @type1 varchar(12) = 'flying'
select atk.Id,atk.Name,b.Damage
from Battle b join [Type] def on b.DefenderMonoTypeId=def.Id join [Type] atk on b.AttackMoveTypeId = atk.Id
where (def.Name=@type1)