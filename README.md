# **Welcome to My Ecommerce site built in React.js 👋** <!-- omit in toc -->

* My application, DRSEcommerce, is an Ecommerce site built to showcase products, easily add them to a cart, provide shipping address, payment via paypal, and show order history. Additionally, each user will have password protected information.

<hr>

## **General**

![](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)

## Languages and Tools  
 React, CSS3, HTML5, Javascript, MongoDB, Express.js, Git, Node.js
<div align="center">  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="25" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="25" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="25" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="25" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="25" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="25" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="25" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="25" />  
</div>  
<br/>


Project Contributors:
* Alison Manning [github](https://github.com/alisonlauren) [linkedIn](https://www.linkedin.com/in/alison-manning-9a25391b1/)

<hr>

## **Features and Functionality **

## **Lessons Learned**
1. The power of Sequelize
* Specifically when we had a many to many relationship for our challenges to users table.
  * Once we got the migrations and models set up properly (specifically using the belongsToMany), Sequelize has a multitude of built in methods that we were able to use to quickly accomplish the tasks necessary.
```js
    db.User.findOne({
        where: {
            id: req.session.user.id
        }
    })
    .then(user=>{
        user.getChallenges({
        where: {
            is_completed: false,
        }
    })
        .then(challenges => {
            if(challenges.length === 0){
                res.status(404).json({error: `No ${workoutType.toLowerCase()} challenges found`})
            }else{
                res.status(200).json(challenges);
            }
        })
        .catch(e=>{
            console.log(e);
        })
    })
    .catch(e=>{
        console.log(e);
    })
```
* Above demonstrates one of these powerful methods that sequelize allows us to access. Once we find the right user by referecing the session user id, we can then call the getChallenges sequelize on the user result.
  * Below is a list of other methods we could also access using the same logic from above:
    * user.getChallenges()
    * user.countChallenges()
    * user.hasChallenge()
    * user.hasChallenges()
    * user.setChallenges()
    * user.addChallenge()
    * user.addChallenges()
    * user.removeChallenge()
    * user.removeChallenges()
    * user.createChallenge()

<!-- ## **Credit** and **Licenses** -->
