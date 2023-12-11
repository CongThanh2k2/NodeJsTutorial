Run file Instagram
    PS D:\NodeJsTutorial\Instagram> npm start

Set defaultvalue: now
    defaultValue: Sequelize.fn('now')

Create Model:
    npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

Migrations
    Create all:
        npx sequelize-cli db:migrate
    Rool back 1:
        npx sequelize-cli db:migrate:undo
    Roolback all:
        npx sequelize-cli db:migrate:undo:all

API

