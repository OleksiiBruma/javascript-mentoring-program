import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "courses-app";
  allCourses = [
    {
      title: "JavaScript",
      duration: "1 hour 28 minutes",
      date: "05.02.2020",
      description: `This is a truly complete JavaScript course, 
      that goes beyond what other JavaScript courses out there teach you. 
      I will take you from a complete JavaScript beginner to an advanced developer. 
      You will not just learn the JavaScript language itself, you will also learn 
      how to program. How to solve problems. How to structure and organize code 
      using common JavaScript patterns. Come with me on a journey with the goal 
      of truly understanding the JavaScript language. And I explain everything 
      on the way with great detail!`
    },
    {
      title: "React",
      duration: "40 hour 30 minutes",
      date: "10.02.2020",
      description: `Dive in and learn React.js from scratch! Learn Reactjs,
       Hooks, Redux, React Routing, Animations, Next.js and way more!`
    },
    {
      title: "Angular",
      duration: "40 hour 30 minutes",
      date: "10.03.2020",
      description: `Master Angular 9 (formerly "Angular 2") and build awesome, 
      reactive web apps with the successor of Angular.js`
    },
    {
      title: "JavaScript",
      duration: "1 hour 28 minutes",
      date: "05.02.2020",
      description: `This is a truly complete JavaScript course, 
      that goes beyond what other JavaScript courses out there teach you. 
      I will take you from a complete JavaScript beginner to an advanced developer. 
      You will not just learn the JavaScript language itself, you will also learn 
      how to program. How to solve problems. How to structure and organize code 
      using common JavaScript patterns. Come with me on a journey with the goal 
      of truly understanding the JavaScript language. And I explain everything 
      on the way with great detail!`
    },
    {
      title: "React",
      duration: "40 hour 30 minutes",
      date: "10.02.2020",
      description: `Dive in and learn React.js from scratch! Learn Reactjs,
       Hooks, Redux, React Routing, Animations, Next.js and way more!`
    },
    {
      title: "Angular",
      duration: "40 hour 30 minutes",
      date: "10.03.2020",
      description: `Master Angular 9 (formerly "Angular 2") and build awesome, 
      reactive web apps with the successor of Angular.js`
    }
  ];
  coursesToShow = this.allCourses;
  setCoursesToShow(searchTerm: string) {
    this.coursesToShow = this.allCourses.filter(course =>
      searchTerm
        ? course.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    );
  }
  onSearch(searchTerm: string) {
    this.setCoursesToShow(searchTerm);
  }
}
