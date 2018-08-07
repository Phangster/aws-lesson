
AWS Primer 
======

We will try our hand at deploying to AWS. More specifically create a RDS (Relational Database Service) and an EC2 (Elastic Compute Cloud) instance. 

You will use the RDS service to create a DB instance. A DB instance is an isolated database environment in the cloud, it can contain multiple user-created databases, and you can access it by using the same tools and applications that you use with a stand-alone database instance.

EC2 allows users to rent virtual computers on which to run their own computer applications. It encourages scalable deployment of applications by providing a web service through which a user can boot an Amazon Machine Image (AMI) to configure a virtual machine, which Amazon calls an "instance", containing any software desired, e.g NodeJS express app. 

Prerequisites
------

* Register for free-tier AWS account.
* Download and install either Postico or pgAdmin.
* WSL or a terminal program if you are running windows.

RDS:
------
We will set-up an AWS RDS instance first.

1. Go to the AWS Management console. Under AWS services, select ``RDS (Relational Database Service)``

2. Create database.

For the purpose of this app we will create a postgreSQL database.
Select Dev/Test for the free tier usage.

Config explanation :
```
Instance class - 
Specifies the computational power, memory & storage allocated to the instance.

Multi AZ deployment - 
Creates replicas in a different Availability Zone (AZ) to 
provide data redundancy, eliminate I/O freezes, and minimize
latency spikes during system backups.

Storage type - 
General purpose SSD
	VS
Provisioned IOPS, suitable for I/O-intensive database workloads. 
Provides flexibility to provision I/O ranging from 1,000 - 30,000 IOPS. 
IOPS = (InputOutput PerSecond).

DB instance id - Used to identify your instances, NOT your DB name!
Master username & password - Master creditentials, don't forget this.

```
### Attention!
In non-production environments, Just select `Only enable options eligible for free-tier`. You don't want to get a bill shock, because you DO need to key in your credit card info to get started.

### Advance settings : (Use Defaults)
You will not be able to select the affordability zones in the free tier,
But naturally in production environments, if you're located in SG you would want to have your instance deployed in SG.

3. Enter your Database Name, create instance and wait.

4. Check Instance status - If instance is done initialising, you will be able to get the endpoint url and connect to it with either Postico or pgAdmin.

For the purpose of testing and development, we would need to edit the security group settings. Look up the instance details, click on `Security Groups`

Set the inbound and outbound traffice to accept from  `Anywhere`.

### Run the SQL commands from db.sql and we are done! 


EC2 :
------
1. Select EC2 from services in your management console.
2. Launch an instance. Select Ubuntu 16.04 LTS server Image.
3. Select the most powerful instance available to you in the free tier.
4. Configure instance details : Use defaults to avoid any additional charges.
5. Configure storage: Specify as much as you need to. Up to 30gigs for free tier.
6. Skip adding tags. (Tags are just meta data for your instances)
7. Security group - Make sure you enable port 22 to accept traffice from anywhere. and also add a HTTP rule at port 80 to accept traffic from anywhere.
8. Click launch and proceed to create key value pair. Download the Key file and launch. Wait for your instance to be created.
9. Locate your key file and change permissions of the file by using this command. Change the filename to match. 	
	`chmod 0400 .ssh/ec2demo.pem`

11. SSH into your Linux instance using its Public DNS:
` ssh -i "ec2demo.pem" ubuntu@ec2-18-222-141-32.us-east-2.compute.amazonaws.com`

### HOORAY! 

Now lets install Node and get our server running

`sudo apt-get update && sudo apt-get upgrade`
`curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`
`sudo apt-get install -y nodejs`


Check your app installs with:

`node -v`
`git -v`

#### Start your app.

1. Git clone this repo onto your server.
2. Enter your PG configs - You can use ` nano index.js ` if you need a text editor.
3. Because we are running the server on port 80, we need to execute the app as a super user so : ` sudo node index.js `

4. Load up the site in your browser, you should be able to see the database query of countries.

### FIN.

Useful commands in the Linux environment:
```
To send the process to the background:
	sudo node index.js &

To list processes running:
	ps -a

To ALL list processes running:
	ps aux

Another process visualisation:
	top

To terminate processes: 
	kill -9 [pid]
```