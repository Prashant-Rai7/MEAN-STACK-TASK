import { Component, OnInit , Renderer2 } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{


  constructor(private renderer: Renderer2) {}


  ngOnInit(): void {
    // $(document).ready(function () {
    //         $('#sidebarCollapse').on('click', function () {
    //             $('#sidebar').toggleClass('active');
    //         });
    //     });

    $(document).ready(function () {
      var trigger = $('.hamburger'),
          overlay = $('.overlay'),
         isClosed = false;

        trigger.click(function () {
          hamburger_cross();
        });

        function hamburger_cross() {

          if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
          } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
          }
      }

      $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');
      });
    });


  // this.renderer.listen('document', 'DOMContentLoaded', () => {
  //   const dropdownToggle = document.querySelectorAll('.dropdown-toggle');

  //   dropdownToggle.forEach((toggle) => {
  //     toggle.addEventListener('click', (event) => {
  //       event.preventDefault();
  //       const submenu = toggle.nextElementSibling;
  //       if (submenu) {
  //         submenu.classList.toggle('show');
  //       }
  //     });
  //   });
  // });

}

}
