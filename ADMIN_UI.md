Task:
```

Suppose there exists a RESTful API for administring a messaging backend (think your favourite messaging application backend).
What API endpoints do you think it should have?
How would you design and implement an admin UI for the messaging backend? 
Discuss implementation details, security, availability, and other considerations
```

Note:
```
There are can be some different application:
1. Admin UI for administrate one messanger app. 
2. Admin UI that helps us to create a new messanger app.
3. Admin UI that helps administrate users/messages/groups in app.
4. Admin UI that helps administrate fetures in app (like enable\disable group chats feture).

I try to cover Admin UI that helps to create a new messenger app with ability to administer features in this messenger.

```

###Endpoints
1. Create/Delete messenger
2. Enable/Disable feature
3. Customize skin
4. Get statistic
5. Get logs
6. Monitoring


###How would you design and implement an admin UI for the messaging backend?
It will be single page application. We can split our UI on small components and build our page with this components. 
It give us ability to don't repeat yourself and do not reproduce the same logic many times. 
Interface of app should be simple and user friendly.
Backend part will be used just as REST API, and most of logic will be done on the UI part to speed up the response process. 

  
###Discuss implementation details, security, availability, and other considerations
Our UI app will be placed in a cloud provider as and our back part. 
It will give us better security and availability and performance. 
This app will be in different Regions and Zones.

To get better security we should think about next points:
1. Use HTTPS
2. Configure VPC
3. Configure Security Groups
4. Use encryption for password. 
5. Use JWT tokens. 
6. Think about XS. (Do not allow run any scripts)

To get better availability we should think about next points:
1. Minimization code of app.
2. Location DNS.
3. Use cache. 
4. Monitoring. 

Also if we need great availability when we deploy new version of our application we should think about blue-green deploy.

