
# Course-Registration




## FAQ

#### Question 1:  Add at least 3 Project features

1. Course register: when i click on select button then my selected course added in my cart. And i also displayed this selected card or course title  in  Course Name list and when i add any course add in my cart then this course credit addition and hour are substraction from my credit course and remaining hour and i have fixed 20hour to purchase or registration any course. Everytime it reduce by adding new courses . And also every course price are set in usestate hook variable and it also displayed in my cart as total price.

2. Toast alert: When i add a new course in my cart ,then i set a success toast pop-up, which is interactive my website and user can understande easily that he successful registration his course and when i try to again add existing cart , then i set an error. When credit and remaining hour are finished , then also i set an error , it's displayed that "you spend your all credit , now you can not buy or select other course. It's a very intersting and user frindly.

3. There are another intersting feature is no one can buy or purchase course after cross credit limitation.
It's shows an error.

4. When user select a course that time there are so many state are changes. Like, when user select a course then price will be store in an variable and everytime he spend his credit and after finished 20 credit he can't buy other course. Also remaining hour are reduce from fixed 20 hours.
 



#### Question 2: Discuss how you managed the state in your assignment project.


Answer: 

In my assignment project, I employed several strategies to effectively manage state in the React application. State management is a crucial aspect of building robust and maintainable applications, and I made sure to implement the best practices for handling state. There are two overview of how I managed state in my project:

1. I used React's built-in useState hook. This was ideal for handling simple UI-specific states that didn't need to be shared across multiple components. For example, I used useState to control and Calculation and  of total price, remaining hour, and total credit.

2. I followed the principle of immutability to ensure data consistency and facilitate state updates. I used functions like useState's updater function or calculate total price, remaining hour and now how many hour is.

3. I used useEffect to fetch data from data.json file. and pass data in another component.


my state management strategy in the assignment project was tailored to the specific requirements of the application. I used local state and other tools to ensure a clean and maintainable codebase while providing a seamless user experience



