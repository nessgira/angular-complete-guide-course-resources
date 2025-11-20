import {Component, ElementRef, viewChild} from '@angular/core';
import {ControlComponent} from "../../../shared/control/control.component";
import {ButtonComponent} from "../../../shared/button/button.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ControlComponent,
    ButtonComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(title: string, ticketText: String) {
    console.log(title);
    console.log(ticketText);
    this.form().nativeElement.reset();
  }
}
