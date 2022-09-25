import { Component } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent {
   title: string = "Important Info Below";
   content: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ducimus aut iure mollitia omnis impedit necessitatibus, molestiae et illo repellendus, amet nobis consequuntur inventore natus alias, nam distinctio a quam!";

   isTechRelated: boolean = true;
}
