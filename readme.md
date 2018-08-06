AWS Primer 
------

We will try our hand at deploying to AWS. More specifically create a RDS and an EC2 instance.

Pre-requisuites:

--* Register for ree-tier AWS account.
--* Download and install either Postico or pgAdmin.
--* WSL or a terminal program if you are running windows.

We will set-up an AWS RDS instance first.

Go to the AWS Management console
Under AWS services - go to RDS

Click create database.

For the purpose of this app we will create a postgreSQL database.

Select Dev/Test for the free tier usage.

Configs :

Instance class - 
Specifies the computational power, memory & storages allocated to the instance.

Multi AZ deployment - Creates replicas in a different Availability Zone (AZ) to provide data redundancy, eliminate I/O freezes, and minimize latency spikes during system backups.

Storage type - 
General purpose SSD (do i need to explain this?)

Provisioned IOPS suitable for I/O-intensive database workloads. Provides flexibility to provision I/O ranging from 1,000 to 30,000 IOPS.
IOPS InputOutput Per Second.

In non-production enviroments, Just select 'Only enable options eligible for free-tier'
You don't want to get a bill shock, because you do need to key in your credit card info to get started.

DB instance id - project4

master username - username
master password - password

Advance settings :
Use defaults

You will not be able to select the afforability zones in the free tier,
But naturally in production enviroments, if you're in SG you'll want to have your instance deployed in SG

DB name = Project4

Create instance and wait.

Check Instance- status

Mac Users - Postico
pgAdmin

For the purpose of testing and development, we would need to edit the security group settings.
notice the name lanuch wizard. let the inbound and outbound to be anywhere.

