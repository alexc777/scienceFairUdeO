import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FirelService } from 'src/app/services/projects/fire.service';
import { DetailProjectComponent } from '../detail-project/detail-project.component';
import { ListProjectsComponent } from '../list-projects/list-projects.component';

@Component({
  selector: 'app-report-projects',
  templateUrl: './report-projects.component.html',
  styleUrls: ['./report-projects.component.scss']
})
export class ReportProjectsComponent implements OnInit, OnDestroy {
  ngUnsubscribe: Subject<void> = new Subject();
  public arrProjects: any[] = [];
  public dataGrafica: any[] = [];
  public data: any = {};

  results: any[] = [
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Proyectos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo: any;

  constructor(public _fireService: FirelService) {

    this.arrProjects = [
      {
        name: 'Sistema de exposición y Votaciones',
        slug: 'sistema-de-exposicion-y-votaciones'
      },
      {
        name: 'COVID Monitoreo de Temperatura',
        slug: 'covid-monitoreo-temperatura'
      },
      {
        name: 'Vehículo detector de obstáculos',
        slug: 'vehiculo-detector-de-obstaculos'
      },
      {
        name: 'Máquina de Goldberg 40 pasos Grupo A',
        slug: 'maquina-goldber-grupo-a'
      },
      {

        name: 'Sistema planetario GeoGebra Grupo A',
        slug: 'sistema-planetario-grupo-a'

      },
      {
        name: 'Eliminacion de Bacterias en agua para consumo humano',
        slug: 'eliminacion-de-backterias-en-agua'
      },
      {
        name: 'Máquina de Goldberg 40 pasos Grupo F',
        slug: 'maquina-de-golberg-grupo-f'
      },
      {
        name: 'Máquina de Goldberg 40 pasos Grupo B',
        slug: 'maquina-de-goldberg-grupo-b'
      },
      {
        name: 'Centros de Vacunación',
        slug: 'centros-de-vacunacion'
      },
      {
        imagen: 'assets/img/videoj-covid/covid-19.jpeg',
        category: 'elec_progra',
        name: 'Video Juego - Salvémonos del COVID-19',
        slug: 'video-juego-covid',
        description: 'El proyecto a realizar será un videojuego, que se desarrollará en PHP7, Canvas y MySQL, el cual contará con un personaje principal, que será un doctor que se encontrará luchando contra el virus para poder salvarse y lograr la meta final, que consistirá en atravesar los 3 niveles que estarán formando este videojuego'
      },
      {
        imagen: 'assets/img/casa-domotica/casa-domotica.jpg',
        category: 'electronica',
        name: 'Casa domótica',
        slug: 'casa-domotica',
        description: 'Casa domótica controlada por aplicación en teléfono inteligente y con enlace tipo BLUETOOTH. Consiste en el conjunto de técnicas orientadas a la automatización en una vivienda'
      },
      {
        imagen: 'assets/img/botonetas/botonetas.png',
        category: 'naturales',
        name: 'Sistema automático para separar botonetas por color',
        slug: 'sistema-botonetas',
        description: 'Sistema automatizado con Arduino Uno para detectar el color de objetos y colocarlos en recipientes separados'
      },
      {
        imagen: 'assets/img/euler/euler.png',
        category: 'naturales',
        name: 'Resolución del Método Euler',
        slug: 'resolucion-euler',
        description: 'El proyecto consiste en a realización de un solucionador automatizado que calculara y graficar el método de Euler mediante algoritmos de Analítica Avanzada de la Ciencia de Datos.'
      },
      {
        imagen: 'assets/img/cuidado-plantas/cuidado-plantas.png',
        category: 'naturales',
        name: 'Automatizacion en el Cuidado de las Plantas',
        slug: 'automatizacion-plantas',
        description: 'El proyecto consiste en la automatización para el cuidado de las plantas, un proyecto bastante económico que se basa en controlar el estado de humedad de las plantas para evitar que se marchiten y además es una gran ventaja para la persona que cuida las plantas ya que no tiene necesidad de que la persona controle las plantas en cada momento sino que el aparato que se construyó para satisfacer las necesidades de la persona con el cuidado de sus plantas y además nos ofrece para modo manual y modo automático y por medio de un controlador que hace todo el proceso y sensores para medir humedad en las plantas que se tienen en el hogar y una bomba que permitirá el riego hacia la plantas.'
      },
      {
        imagen: 'assets/img/goldberg-c/golberg-c.jpg',
        category: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo C',
        slug: 'maquina-de-bolberg-grupo-c',
        description: 'Una máquina de Rube Goldberg es cualquier aparato muy complejo que realiza una tarea muy simple de una manera muy indirecta.'
      },
      {
        imagen: 'assets/img/robot3-1/robot3-1.jpg',
        category: 'electronica',
        name: 'Robot 3 en 1 con Arduino, vehiculo autónomo digital',
        slug: 'robot-3-en-1-con-arduino',
        description: 'El siguiente proyecto consiste en la programación y elaboración de un robot móvil autónomo que estará siendo realizado con una tarjeta basada en microcontrolador de la familia Arduino. Su finalidad es que tenga movimiento en su trayectoria marcada, nos basaremos en un trabajo eficiente de evasión de obstáculos. Para el mismo se realiza un análisis de los requisitos tanto a nivel hardware como software que deberá contener el robot. Adicionalmente contará con un circuito de estacionamiento para el recorrido del mismo.'
      },
      {
        imagen: 'assets/img/brazo/brazo.png',
        category: 'electronica',
        name: 'Brazo robótico',
        slug: 'brazo-robotico',
        description: 'Es un brazo robótico capaz de poder moverse por sí solo, ya sea por medio de pulsadores, potenciómetros o consigo mismo poder ser controlado por algún contro'
      },
      {
        imagen: 'assets/img/llenado-pinturas/proyecto-pintura.jpeg',
        category: 'elec_progra',
        name: 'Llenado en la selección automática de envases en Fábrica de Pinturas',
        slug: 'llenado-envases-pintura',
        description: 'Es un prototipo para un sistema autónomo que se basa en el llenado de envases de pinturas el cual es monitoreado contantemente por medio de sensores digitales el cual es procesado y enviado vía Radio Frecuencias a un panel central el cual es gestionado y enviado auna BD(Base De Datos) y así poder monitorear contantemente los productos terminados, dependiendo del código de barras detectado así será su color dispensado, cabe resaltar que es un circuito con detección de errores lo que quiere decir que si hay algún problema en el sistema el dispositivo nos lo indicara atreves de sus distintas señalizaciones.'
      },
      {
        imagen: 'assets/img/ally-cane/ally-cane.png',
        category: 'elec_progra',
        name: 'Ally Cane/Baston Aliado',
        slug: 'baston-aliado',
        description: 'Somos un grupo de estudiante universitarios y a grandes rasgos buscamos hacer más fácil la adaptación de movilizarse de una persona que haya perdido la vista ya sea por accidente o enfermedad y también dar un adicional de comodidad a las personas que nacieron sin la vista. Queremos brindarles la mayor seguridad a la hora de movilizarse por la ciudad, debido a que la infraestructura no se encuentra adaptado a un 100% para este tipo de capacidades, dado a que el bastón cuenta con sensores ultrasónicos que le permite aproximar y alertar en el momento de topar con algún objeto o persona. Brindar apoyo con la ubicación satelital (GPS) debido que, como cualquier  otra persona, necesita cubrir sus necesidades personales lo cual lo implica salir y en algunas situaciones implica ir a un lugar que no conoce, el GPS lo guiara con mayor facilidad para encontrar su destino, dándole así seguridad al movilizarse. Ayudar grandemente con la contaminación ambiental, debido a que cuenta con paneles solares que cargaran la batería sin necesidad de  conectarla a una corriente eléctrica, para así disminuir el impacto de  consumo energético y el gasto de baterías desechables.'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'tec_info_comu',
        name: 'Sistema Purificador de ambiente',
        slug: 'purificador-de-ambiente',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, tortor eget accumsan pulvinar'
      },
      {
        imagen: 'assets/img/propeller/propeller.jpg',
        category: 'electronica',
        name: 'Propeller',
        slug: 'propeller',
        description: 'Nuestro proyecto consiste en un motor que hace girar una base, la cuál, consta de un Arduino, un módulo Bluetooth y una matriz LED. El objetivo de nuestro proyecto es desplegar texto y diseños de figuras, aplicando conocimientos de electrónica y programación ya que, al mismo tiempo, quisimos desarrollarlo de una manera interactiva. Como todos sabemos los cables están quedando obsoletos, por lo tanto, hemos hecho uso de un modulo para controlarlo a través de una aplicación y así cargar la información a nuestra matriz LED'
      },
      {
        imagen: 'assets/img/faja/faja.jpeg',
        category: 'electronica',
        name: 'Faja Transportadora',
        slug: 'faja-transportadora',
        description: 'El proyecto consta de una banda transportadora fabricada desde cero con un motor monofásico 120V y una banda de material de cuero con fibra para el fácil transporte de los productos de un lado de la banda al otro, adicional consta de sensores infrarrojos para la detección de 1 tamaño de producto este a definir dependiendo del uso que se le desee dar este sensor nos sirve para poder contabilizar los productos y poder almacenar la cantidad en un Excel así poder llevar el control de los mismos adicional cuenta con otro sensor que detectara si el producto no es de esta línea esto para tener un mayor control y evitar cruce de productos adicional contara con un descarte por medio de un actuador eléctrico para retirar el producto que no sea de esta línea. Cuenta con una producción programada de 10 productos por despacho para poder mejorar el control dentro de la línea de producción o donde se desee implementar'
      },
      {
        imagen: 'assets/img/safe/safe.png',
        category: 'naturales',
        name: 'Safe Trip/ Sistema Automatizado Transporte Publico',
        slug: 'safe-trip',
        description: 'Sistema diseñado para controlar de forma estricta la cantidad de pasajeros en una unidad de transporte públicopreviniendo la sobrecarga de usuarios en la unidad y minimizando contagios de enfermedades respiratorias.'
      },
      {
        imagen: 'assets/img/solar-geogebra-c/solar-c.png',
        category: 'naturales',
        name: 'Sistema planetario GeoGebra Grupo C',
        slug: 'sistema-planetario-grupo-c',
        description: 'El proyecto consiste en una animación del sistema solar por medio del programa Geogebra que es unsoftware que nos permite realizar procesos geométricos, algebraicos y cálculos y visualizar graficas quenos permite ver desde otro punto de vista las aplicaciones que nos brinda la geometría para poder realizar mencionado proyecto.'
      },
      {
        imagen: 'assets/img/banner-projects.jpg',
        category: 'naturales',
        name: 'Máquina de Goldberg 40 pasos Grupo D',
        slug: 'maquina-de-golberg-grupo-d',
        description: 'Se realizarán 40 pasos para formar la máquina de Rube Goldberg.'
      },
      {
        imagen: 'assets/img/pdf/pdf-scap.png',
        category: 'naturales',
        name: 'PDF SCRAPING',
        slug: 'pdf-scraping',
        description: 'El web Scraping es una herramienta bastante útil utilizada para extraer información de distintas páginas web desde el código fuente. Una vez extraída la información, se almacena en la base de datos del programa donde es procesada y compilada en una tabla, la cual se exporta como distintos archivos, en este caso, será exportado en PDF para poder abrir el documento y ver la recolección del Scraping de cualquier tipo de información. En el proyecto recopilaremos la información de distintas páginas web para hacer una o varias tablas con distintos temas como: Futbol, PIB, Índice de población en países, etc.'
      },
      {
        imagen: 'assets/img/sis-comandas/siscom.png',
        category: 'elec_progra',
        name: 'SISCOM (Sistema de Comandas)',
        slug: 'siscom',
        description: 'Eco Restaurante San Luis, ubicado en Aldea El Hato, Antigua Guatemala ofrece un concepto al aire libre, rodeado de naturaleza. El proyecto SISCOM surge en el momento que los meseros toman la orden a los comensales, anotando en una libreta la orden. En ocasiones, las ordenes tienden a ser confundidas al momento de servirlas debido a que no se da el seguimiento adecuado entre orden y número de mesa durante los tiempos de alta demanda de servicio. Por lo cual, el proyecto consiste en realizar la toma de ordenes por medio de un dispositivo móvil Android.'
      }
    ];


  }
  ngOnInit(): void {

    this._fireService.getVotosGenerales()
      .pipe(takeUntil(this.ngUnsubscribe)).subscribe(votos => {
        this.arrProjects.forEach(proyecto => {
          //console.log(proyecto);
          proyecto.total = 0;
          votos.forEach(voto => {
            //console.log(voto);
            //console.log(proyecto);
            if (proyecto.slug === voto.slug) {
              proyecto.total = parseInt(proyecto.total) + parseInt(voto.valor);
              let data: any = {};
              data.name = proyecto.name;
              data.value = proyecto.total;
              const r_proyecto = this.dataGrafica.find((obj => obj.name === proyecto.name));
              if (r_proyecto) {
                r_proyecto.value = proyecto.total;
              } else {
                this.dataGrafica.push(data);
              }


            }
          });
        });
        this.results = [...this.dataGrafica];
        console.log(this.dataGrafica);
      });
  }



  ngOnDestroy() {
    // clearInterval( this.intervalo );
  }



}
