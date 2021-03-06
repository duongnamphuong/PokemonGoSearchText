use pokemon
declare @Normal int=1,@Fire int=2,@Fighting int=3,@Water int=4,@Flying int=5,@Grass int=6,@Poison int=7,@Electric int=8,@Ground int=9,@Psychic int=10,@Rock int=11,@Ice int=12,@Bug int=13,@Dragon int=14,@Ghost int=15,@Dark int=16,@Steel int=17,@Fairy int=18
--All types: @Normal,@Fire,@Fighting,@Water,@Flying,@Grass,@Poison,@Electric,@Ground,@Psychic,@Rock,@Ice,@Bug,@Dragon,@Ghost,@Dark,@Steel,@Fairy
select p.*, dbo.GetType(p.Id, p.FormId) as [Type],dbo.GetSuperEffectiveMoveTypes(p.Id, p.FormId) as [WeakTo],dbo.GetDoubleSuperEffectiveMoveTypes(p.Id,p.FormId) as [DoubleWeak]
from Pokemon p join PokeType pt on pt.PokeId = p.Id and pt.FormId = p.FormId
where 1=1
and exists(
	select 0 from PokeType pt where p.Id=pt.PokeId and p.FormId=pt.FormId and pt.TypeId in
	(@Flying,@Water)--list of included ones (including but not limit to).
)
and not exists(
	select 0 from PokeType pt where p.Id=pt.PokeId and p.FormId=pt.FormId and pt.TypeId in
	(@Normal,@Fire,@Fighting,@Grass,@Poison,@Electric,@Ground,@Psychic,@Rock,@Ice,@Bug,@Dragon,@Ghost,@Dark,@Steel,@Fairy)--list of excluded ones.
)

--arlo
--and p.Id in(303,6,9,208,212,149,373)
--and p.Id in(303)
--and p.Id in(6,9,208)
--and p.Id in(212,149,373)

--sierra
--and p.Id in(374,103,131,319,275,229,65) and p.FormId=1
--and p.Id in(374) and p.FormId=1
--and p.Id in(103,131,319) and p.FormId=1
--and p.Id in(275,229,65) and p.FormId=1

--cliff
--and p.Id in(127,105,139,466,248,260,389) and p.FormId=1
--and p.Id in(127) and p.FormId=1
--and p.Id in(105,139,466) and p.FormId=1
--and p.Id in(248,260,389) and p.FormId=1

group by p.Id, p.FormId, p.Species, p.Atk, p.Def, p.Hp, p.CandyId, p.IsLegend, p.IsMythic, p.IsBaby,p.CandyGainUponCatching
having count(*)=2--1 for single type, 2 for dual type