import {AfterViewInit, Component, ElementRef, OnInit, output, viewChild} from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{title: string; text: string}>();

  ngOnInit() {
    console.log('ON INIT')
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form().nativeElement);
  }
  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText});
    this.form().nativeElement.reset();
  }
}
