import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje = '';
  elemento: any;

  // tslint:disable-next-line: variable-name
  constructor( public _cs: ChatService) {
    this._cs.cargarMensajes().subscribe(() => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
   }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviarMensaje() {
    if (this.mensaje.length === 0) {
      return;
    }
    this._cs.agregarMensaje(this.mensaje).then(() => this.mensaje = '').catch((err) => console.log('Error al enviar', err));
    console.log(this.mensaje);
  }

}
