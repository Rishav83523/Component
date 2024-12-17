import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  OnSubmit(
    titleElememt: string,
    descriptionElememt: string,
    form: HTMLFormElement
  ) {
    console.log(titleElememt);
    console.log(descriptionElememt);
    form.reset();
  }
}
