--select p.Id,p.FormId from Pokemon p where p.Species like 'Rayquaza'

declare @Id int=384
declare @form int=1
declare @tier int=5

declare @baseAtk float=(select p.Atk from Pokemon p where p.Id=@Id and p.FormId=@form)
declare @baseDef float=(select p.Def from Pokemon p where p.Id=@Id and p.FormId=@form)
declare @hp float=(select t.Hp from RaidTier t where t.Tier=@tier)
declare @level float=(select t.[Level] from RaidTier t where t.Tier=@tier)
declare @cpm float=(select m.Cpm from CpmMap m where m.LvDouble=cast(@level*2 as tinyint))

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