import { SearchPageService } from './../../search-page/search-page.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import Pokemon from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  @Input()
  pokemon: Pokemon;

  searchField: string = "";
  progressControll: boolean = false;
  resultControll: boolean = false;

  constructor(private searchPageService: SearchPageService) { }

  ngOnInit(): void {
  }

  async fetchPokemon(name: string): Promise<void>{
    try {
      this.progressControll = true;
      this.pokemon = await this.searchPageService.getPokemonByName(name);
      this.resultControll = true;
      this.progressControll = false;
    } catch (error) {
      alert("Pokémon não encontrado");
      this.progressControll = false;
      this.resultControll = false;
    }
  }

  async search(){
    if(this.searchField){
      this.fetchPokemon(this.searchField.toLocaleLowerCase());
    }else{
      alert("Digite o nome de um pokémon");
    }
  }

}
