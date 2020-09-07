--select p.Id,p.FormId,f.[Desc] from Pokemon p join PokeForm f on p.FormId=f.Id where p.Species like 'Deoxys%'

declare @Id int=384
declare @form int=1
declare @tier int=5

declare @baseAtk float=(select p.Atk from Pokemon p where p.Id=@Id and p.FormId=@form)
declare @baseDef float=(select p.Def from Pokemon p where p.Id=@Id and p.FormId=@form)
declare @hp float=(select t.Hp from RaidTier t where t.Tier=@tier)
declare @LvDouble float=(select t.LvDouble from RaidTier t where t.Tier=@tier)
declare @cpm float=(select m.Cpm from CpmMap m where m.LvDouble=@LvDouble)

declare @name nvarchar(255)=(select p.Species from Pokemon p where p.Id=@Id and p.FormId=@form)
declare @cp int=floor((@baseAtk+15)*SQRT(@baseDef+15)*sqrt(@hp)/10)
declare @atk int=floor((@baseAtk+15)*@cpm)
declare @def int=floor((@baseDef+15)*@cpm)

print @name+' raid boss has following stats:'
print'Type = '+dbo.GetType(@Id,@form)
print'CP = '+cast(@cp as varchar(255))
print'Atk = '+cast(@atk as varchar(255))
print'Def = '+cast(@def as varchar(255))
print'HP = '+cast(@hp as varchar(255))