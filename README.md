Notas:

inputs
-[] para usar los inputs del hijo: Se envian las propiedades con los datos.

Outputs

-() para usar los outputs: Se esperan eventos y por medio de la función se dan manejo.
-Para declarar un valor de salida se debe de hacer por evento y definir el tipo de valor entre <> y se debe de inicializar con un objeto eventemitter


Ciclo de vida de los componentes
1) Constructor: Se usa para crear el componente y ponerlo en la interfaz
2) ngOnChanges: Se llama cuando cambia una propiedad vinculada a datos (data-bound) permitendo ver el antes y despues de los datos (se ejecuta por cada cambio)
3) ngOnInit: Se ejecuta solo una vez, cuando el componente ya está listo en la interfaz grafica (ya se inicializaron todas las propiedad vinculadas a datos)
4) ngDoCheck: Detecta cuando los elementos hijos son creados y puestos en la interfaz (puede verificar y responder a cambios que no reporta la detección de cambios por defecto)
4.1) ngAfterContentInit: se invoca inmediatamente después de que Angular haya completado la inicialización de todo el contenido de la directiva. Se invoca solo una vez cuando se instancia la directiva.
4.2) ngAfterContentChecked: se invoca inmediatamente después de que el detector de cambios predeterminado haya completado la verificación de todo el contenido de la directiva.
4.3) ngAfterViewInit: se invoca inmediatamente después de que Angular haya completado la inicialización de la vista de un componente. Se invoca solo una vez cuando se instancia la vista.
4.4) ngAfterViewChecked: se invoca inmediatamente después de que el detector de cambios predeterminado haya completado un ciclo de verificación de cambios para la vista de un componente.
5) ngOnDestroy: se invoca inmediatamente después de que se destruye una directiva, tuberioa o servicio, se puede usar para hacer limpiza


ngOnChanges y ngDoCheck entran en conflicto si se usan al mismo tiempo
ngOnChanges: la forma nativa de detección automatica de cambios
ngDoCheck: hace la detección automatica de cambios definida por el programador


Router
routerLink reemplaza el href. si se hace con el href refresca toda la página haciendo que no sea una SPA, con el routerLink si refresca la parte que necesita



Modulos:
-el shared modulo se comparte a todos los modulos, es necesario que esos modulos lo importen
-el core modulo se comparte a todos los modulos, por defecto siempre está disponible sea que se importe o no, sirve para guardar servicios que tenga una sola referencia de los datos


Schematic
-Generar un formulario: ng generate @angular/material:address-form <component-name>
-Generar una barra de navegación: ng generate @angular/material:nav <component-name>
https://platzi-store.herokuapp.com/products/