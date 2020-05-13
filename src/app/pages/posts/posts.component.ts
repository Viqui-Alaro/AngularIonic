import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;
  constructor( private dataService: DataService) { }

  ngOnInit(): void {

    this.mensajes = this.dataService.getPosts();
   /* this.dataService.getPosts()
        .subscribe( posts => {
          console.log(posts);
        }
      );*/
  }

  escuchaClick(id: number){
 console.log('click en: ', id);
  }

}
