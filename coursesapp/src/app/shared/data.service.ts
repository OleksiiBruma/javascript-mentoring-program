import { Injectable } from "@angular/core";

export interface DataItem {
  id: number;
  title: string;
  description: string;
  pictureURL: string;
  duration: string;
  date: string;
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  private items = new Array<DataItem>(
    {
      id: 1,
      title: "Javascript",
      description:
        "Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack",
      pictureURL: "https://img-a.udemycdn.com/course/240x135/851712_fc61_5.jpg",
      duration: "1234",
      date: "01.02.2020",
    },
    {
      id: 2,
      title: "Vue JS 2 - The Complete Guide",
      description:
        "Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!",
      pictureURL: " https://img-a.udemycdn.com/course/240x135/995016_ebf4.jpg",
      duration: "1234",
      date: "01.02.2020",
    },
    {
      id: 3,
      title: "React Native - The Practical Guide 2020",
      description:
        "Use React Native and your React knowledge and take your web development skills to build native iOS and Android Apps",
      pictureURL:
        "https://img-a.udemycdn.com/course/240x135/959700_8bd2_11.jpg",
      duration: "1234",
      date: "01.02.2020",
    }
  );

  getItems(): Array<DataItem> {
    return this.items;
  }
  filterItems(text: string): Array<DataItem> {
    return this.items.filter((item) => item.title.includes(text));
  }

  getItem(id: number): DataItem {
    return this.items.filter((item) => item.id === id)[0];
  }
}
