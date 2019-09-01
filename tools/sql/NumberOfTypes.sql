select p.Id, p.FormId, p.Species, p.Atk, p.Def, p.Hp, p.CandyId, p.IsLegend, p.IsMythic, p.IsBaby, dbo.GetType(p.Id, p.FormId) as [Type], count(*) as [NumberOfTypes]
from Pokemon p join PokeType pt on pt.PokeId = p.Id and pt.FormId = p.FormId
join Candy c on p.CandyId=c.Id
where c.[Name] in (N'bulbasaur')
group by p.Id, p.FormId, p.Species, p.Atk, p.Def, p.Hp, p.CandyId, p.IsLegend, p.IsMythic, p.IsBaby