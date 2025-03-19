import { Component,ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  @ViewChild('confirmDialog') confirmDialog!: ElementRef;
  overlay!: HTMLElement;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Create Overlay Element Dynamically
    this.overlay = this.renderer.createElement('div');
    this.renderer.addClass(this.overlay, 'overlay');
    this.renderer.appendChild(document.body, this.overlay);
    this.overlay.style.display = 'none';
  }


  openModal() {
    this.confirmDialog.nativeElement.showModal();
    this.overlay.style.display = 'block';
    this.renderer.addClass(document.body, 'modal-open');

    // Prevent clicking outside to close
    this.confirmDialog.nativeElement.addEventListener('cancel', (event: Event) => event.preventDefault());
  }

  // Close Modal & Restore Scrolling (Only via Cancel Button)
  closeModal() {
    this.confirmDialog.nativeElement.close();
    this.overlay.style.display = 'none';
    this.renderer.removeClass(document.body, 'modal-open');
  }

}
