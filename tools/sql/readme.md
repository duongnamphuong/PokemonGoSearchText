# Pokemon database
This database stores the in-game data of Pokémon Go.

It is useful to find the best team against Gyms, Team Go Rocket, once knowing their Pokémon and moves.

The data was inputted semi-manually. I also wrote some codes (JavaScript, PHP) to get information from other websites and generate "insert" T-SQL commands. Therefore, if those pages change or have new data, my code will no longer work, but at least you can use it as reference to create your own code.

## Scripts

* TypeId.sql: Ids (primary key) of Pokémon/move types
* Single type effectiveness.sql: Find types of move that are good against a single-type Pokémon. Input is that Pokémon's type
* Search with type filters (including and excluding).sql: Show details of Pokémons, including what move types good against them
* RaidBoss.sql: get CP and other information of a Raid Boss
* Pokemon.sql: Schema and data of database
* NumberOfTypes.sql: sample script to get number of types of Pokémon.
* Find Resisting Pokémon.sql: find defensive Pokémons against a certain move type.
* Error checking scripts.sql: script used to check error.
* Counters dual type Pokémon.sql: Find types of move that are good against a dual-type Pokémon. Input is that Pokémon's types

## Database (schema + data) scripting

How the **Pokemon.sql** is created:

* In SSMS (SQL Server Management Studio), right-click **Pokemon** database, then select **Tasks** > **Generate Scripts...**
* In **Generate and Publish Scripts** window, click **Next** to jump to **Choose Objects** step
* At **Choose Objects** step, choose **Select specific database objects**, then check **Tables** and **User-Defined Functions**
* Click **Next** to jump to **Set Scripting Options** step
* Output type: **Save scripts to a specific location** (default)
* **Save to file**: **Single file**: **File name**: (You know what to input here :D)
* Click **Advanced** to open **Advanced Scripting Options**, look for **Types of data to script** and choose **Schema and data**.
* About other options in this window can be set here. Besides you can refer to the **Scripting options** section to setup default options for them.

## Scripting options

How to open: Menu: **Tools** > **Options** > **SQL Server Object Explorer** > **Scripting**

Set your settings like below:

* **Include descriptive headers**: False. Reason: to get rid of comments about date/time of creation in the script file.
* **Include collation**: True
* **Script indexes**: True

For other options, I guess leaving them default is OK.

In the future, If I find that an option(s) is necessary, I'll update this readme.
