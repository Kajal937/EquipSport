import { Component } from '@angular/core';
import { HeaderComponent } from "../outer-layout/header/header.component";
import { FooterComponent } from "../outer-layout/footer/footer.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
