Task:
```
Discuss scalability and performance considerations in a messaging backend (think your favourite messaging app)

```
As we need high performance and scalability I think that we should proceed with one of cloud provider such as `AWS` or `GCP`. 
There are a lot of features, that will help us with our app. 

Bellow you can find a main points that we can use in our application to get performance and scalability. 

#####Scalability:
1. Split app to small logical parts. It will give us ability to scale just parts that have greater load. And do not lose our money.
2. Configure scaling by different policies (load, CPU).
3. Configure Load Balancer.
4. Configure Database Cluster (with partitioning).
5. Configure monitoring system to send alerts based on exceptions or higher load, to react on it.
6. Configure Logging mechanism. 

#####Performance:
1. As chat should be fast, so we needed persistent connections - WebSockets.
2. Place servers in different Regions and Zones. 
3. Configure DNS by location.
4. Use asynchronous (multi-threading, korutins) code. 
4. Use cache. 
