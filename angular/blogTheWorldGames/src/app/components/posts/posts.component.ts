import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/providers/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  loading: boolean = true; // Já começa com estado carregando.
  posts: any[any];
  constructor(public blog: BlogService) { }

  ngOnInit() {
    //  Aqui vamos chamar o método posts do Provider/Serviço
    // do blog que criamos anteriormente.
    // Quando for resolvido, retornará um array (lista) de posts tipo any.

    this.blog.posts().then((posts: any[any]) => { // Acessamos this.blog pois instanciamos no constructor desta classe a variável blog do tipo BlogService.

      setTimeout(() => { // Daremos um tempo para exibir o resultado no template.
        this.posts = posts; // Ligamos o resultado na view (template).
        this.loading = false; // Paramos o carregamento.
      }, 1 * 1000) // Define o tempo de carregamento para um segundo.
    })
  }
}
