import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  arrCategory: any[] = [
    { name: 'Todas', slug: 'all' },
    { name: 'Electrónica', slug: 'electronica' },
    { name: 'Ciencias Naturales', slug: 'naturales' },
    { name: 'Electrónica e Informatica', slug: 'elec_progra' },
    { name: 'Tecnología de Información y comunicaciones', slug: 'tec_info_comu' }
  ]

  arrProjects: any[] = [
    { name: 'Monitoreo de temperatura', category: 'Electrónica', video: 'xsN5v-AzLQE', link: 'https://streamyard.com/', slug: 'electronica' },
    { name: 'Dispensadora de Colores', category: 'Electrónica', video: 'Wop0_G4L_uQ', link: 'https://streamyard.com/', slug: 'electronica' },
    { name: 'Proyecto Demo', category: 'Programación', video: 'Wop0_G4L_uQ', link: 'https://streamyard.com/', slug: 'programacion' },
    { name: 'Proyecto Demo', category: 'Programación', video: 'Wop0_G4L_uQ', link: 'https://streamyard.com/', slug: 'programacion' },
  ]

  constructor(private sanitizer: DomSanitizer) {
    this.getProjects();
  }

  ngOnInit(): void {
  }

  getProjects() {
    this.arrProjects.forEach(e => {
      if (e.video) {
        e.video = this.updateVideoUrl(e.video)
      }
    });
  }

  updateVideoUrl(id: string) {
    let url = 'https://www.youtube.com/embed/' + id;

    let urlNew = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    return urlNew
  }

}
