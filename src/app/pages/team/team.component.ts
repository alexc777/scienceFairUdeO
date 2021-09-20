import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  arrTeam: any[] = [
    { image: 'assets/img/osman-front.jpg', name: 'Osman Cruz', work: 'Frontend Lead', frase: 'Primero hazlo, luego hazlo bien, luego hazlo mejor'},
    { image: 'assets/img/LuisRecurso-2.png', name: 'Luis Rodas', work: 'Backend Lead', frase: ' Casarse con un software es un pecado capital en este mundo de constante evolución'},
    { image: 'assets/img/OlgaRecurso.png', name: 'Olga Hinestroza', work: 'Project Manager', frase: 'El éxito depende más de tu constancia, que de tu talento'},
    { image: 'assets/img/CeciliaRecurso-7.png', name: 'Cecilia Valencia', work: 'Frontend Developer', frase: 'No intentes ser útil. Intenta ser tú: eso basta, y en eso reside tu razón de ser.'},
    { image: 'assets/img/MynorRecurso-5.png', name: 'Mynor Vásquez', work: 'Frontend Developer', frase: 'Un buen desarrollador de software trabaja con disciplina y constancia desde el primer día.'},
    { image: 'assets/img/BryanRecurso-4.png', name: 'Bryan Tema', work: 'Frontend Developer', frase: 'La creatividad es la inteligencia divirtiéndose. '},
    { image: 'assets/img/SofiaRecurso-1.png', name: 'Sofia Méndez ', work: 'Backend Developer', frase: 'Enfócate en lo positivo y veras lo mejor de cada experiencia.'},
    { image: 'assets/img/JorgeRecurso-6.png', name: 'Jorge Rodriguez', work: 'Backend Developer', frase: 'La tecnología es mejor cuando reúne a la gente.'},
    { image: 'assets/img/LucasRecurso.png', name: 'Edgar Lucas', work: 'Project Manager', frase: 'No temas vivir la vida con lentitud creciendo a tu ritmo, lo único a lo que debes temerle es a detenerte en medio del camino'},
    { image: 'assets/img/KennetRecurso.png', name: 'Kennet Rodriguez', work: 'Backend Developer', frase: 'Intenta ser mejor en la tarea que eres bueno, y con eso tomaras ventaja.'},
    { image: 'assets/img/SergioRecurso.png', name: 'Sergio Avendaño', work: 'Backend Developer', frase: 'Eres tan grande como tu mente te permita serlo y tú controlas tu mente, en conclusión, solo tú defines el gigante que puedes llegar a ser.'},
  ]

  constructor() { }

}
