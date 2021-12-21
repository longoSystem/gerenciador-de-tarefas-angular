import { Directive, ElementRef, Input, OnInit } from '@angular/core';

/**
 * Directivas geram um ATRIBUTO HTML, enquanto que, os Components geram uma TAG HTML.
 * 
 * @author Juliano Sarnes Longo
 * 
 */

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit{

  //A anotacao @Input é a uma entrada para a diretiva recuparar a informacao do elemento HTML ao qual 
  //a diretiva estara associada o nome da diretiva que foi declarado deve ser igual ao nome do SELECTOR.
  @Input() tarefaConcluida: boolean; 

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }

}
