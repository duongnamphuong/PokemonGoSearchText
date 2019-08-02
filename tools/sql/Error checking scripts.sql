--Pokémon with neither 1 nor 2 types
with PokeTypeCount as (
	select p.Id,p.FormId,p.Species,COUNT(t.TypeId) as [Types]
	from Pokemon p left join PokeType t on p.Id = t.PokeId and p.FormId = t.FormId
	group by p.Id,p.FormId,p.Species
) select * from PokeTypeCount where [Types] not in (1,2)
