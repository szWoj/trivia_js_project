MongoDB shell version v5.0.6
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("fb49806a-cd89-4820-9718-d5b312e5f357") }
MongoDB server version: 5.0.6
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/
================
---
The server generated these startup warnings when booting: 
        2022-04-26T19:45:12.616+01:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
        2022-04-26T19:45:12.616+01:00: You are running this process as the root user, which is not recommended
        2022-04-26T19:45:12.616+01:00: This server is bound to localhost. Remote systems will be unable to connect to this server. Start the server with --bind_ip <address> to specify which IP addresses it should serve responses from, or with --bind_ip_all to bind to all interfaces. If this behavior is desired, start the server with --bind_ip 127.0.0.1 to disable this warning
        2022-04-26T19:45:12.616+01:00: Soft rlimits for open file descriptors too low
        2022-04-26T19:45:12.616+01:00:         currentValue: 2560
        2022-04-26T19:45:12.616+01:00:         recommendedMinimum: 64000
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> [3G[Jdb.scores.insertOne(    { category : "Science",     result :  6 }  );[72G[3G[J[3G[3G[J[3G^C
bye
