# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# We can proceed with small microservice architecture based on the MVC design pattern

# Database decision

Step 1 : Start with the database decision ,we can proceed with Sql database as I can found multiple relation between the entities
step 2 : Both MySql and postgres is good for this project , but we proceed with PostgreSQL, which provides more flexibility and scalability

# tables

Table : Agent , shift , Facility

Table Structure :

1. Agent : (id , age, name , address , phone_number, shift_id )
2. Facility : (id, name , location)
3. Shift : (id,name,timeline, facility_id)
4. Map_shift_Agent ; (shift_id,agent_id)

# Estimations =>

1 day to create MVC pattern
1 day for cover unit tests + integrations tests + other edge scenario's

# Frameworks

We can go with NodeJs (Express or fastify) , looks like the simple I/O operations but complexity involved then we can move into Java or GoLang

For Frontend , we can proceed with React or any other suitable format
We can use Modern tanstack query or redux for state management

# Services for retrieving the information's

1. getShiftsByFacility : (facility_id) : string|number => shift[]
   Look up in Shift table facility_id
2. getAgentByShift : (shift_id) : string|number => Agent[]
   Look up in Agent table based on shift_id
3. getShiftByAgent : (agent_id) : string|number => shift[]
   Look up in Map_shift_Agent table based on agent_id
4. getGenerateReport : (shift[]) => Generate the pdf file => Columns shift vs facility vs agent
