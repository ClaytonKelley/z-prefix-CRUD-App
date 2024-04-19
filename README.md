# Requirements
Must have docker installed and setup correctly


# Installation

Clone this repo

Future features will have this done automatically. Until the please follow the following instructions.

### Navigate into client/frontend and run the following command

 - `npm install`

### Navigate into /server and run the following command

- `npm install`

### Navigate into the root directory and run the following command

- `docker compose up -d`


## Database Seeding
If you want to initilize the database with dummy data and accounts run the following command in the /server folder after the docker containers are running.

- `knex migrate:latest`
- `knex seed:run`


## Login

- $\textcolor{violet}{\textsf{Login}}$ - logins in after inputting credentials. Test cred are UserName :`test` Pass: `test`
- $\textcolor{lime}{\textsf{Create Account}}$ - If you dont have a Account click this to create one.
- $\textcolor{red}{\textsf{Continue as Guest}}$ - Take you to the Guest Items Page.

![Alt text](Readmeimgs/Login.png?raw=true)

## Create account

- Pretty self-explanitory

![Alt text](Readmeimgs/createaccount.png?raw=true)

## User items Page
- $\textcolor{red}{\textsf{See all Items}}$ - Click this to see all itmes created by everyone.
- $\textcolor{yellow}{\textsf{Add an Item}}$ - Click this to add an Item view
- $\textcolor{violet}{\textsf{Logout}}$ - If you dont have a Account click this to create one.
![Alt text](Readmeimgs/useritems.png?raw=true)

## Add Item
 - After clicking Add an Item. Its pretty Self Explanitoy
 - Item name can only be 100 characters
 - Desecription is limited to 1000 characters

![Alt text](Readmeimgs/createitem.png?raw=true)


## Individual Item - OnClick

- on clicking an item in the table this will pop up displaying item info.
- $\textcolor{red}{\textsf{Edit}}$ - this will toggle the fields to be editible

![Alt text](Readmeimgs/viewitem.png?raw=true)

--------------------------

- $\textcolor{violet}{\textsf{Delete}}$ - will delete the item from the database. Be careful
- $\textcolor{orange}{\textsf{Edit}}$ - will toggle back to non-edit view

![Alt text](Readmeimgs/edititem.png?raw=true)

## GuestItems
 - Restriced item view
 - limits to only seeing all items
 - can still click a item to view all details with out edit or delete options

![Alt text](Readmeimgs/guestitems.png?raw=true)
![Alt text](Readmeimgs/guestitemview.png?raw=true)


