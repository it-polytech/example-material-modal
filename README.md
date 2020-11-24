## Intallazione Angular Material - Lasciare tutto come di default
ng add @angular/material 

## Aggiungere import a app.module.ts (o modulo in cui serve caricare)
import { MatDialogModule } from '@angular/material/dialog';

## Aggiungere MatDialogModule ad Array imports in app.module.ts
imports: [ ... , MatDialogModule, ... ]

## Generare il componente Dialog - Componente che verrà chiamato ogni volta che ci sarà bisogno del Modal
ng g c components/dialog-body

## importare nel componente padre (quello con il pulsante che aprirà il componente , in questo caso MainComponent ) il matDialog e matDialogConfig
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

## Dichiarare il dialog nel costruttore del componente padre 
constructor(private matDialog: MatDialog) {}

## importare NEL COMPONENTE PADRE (main) il componenente dialog-body 
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

## creare il metodo di apertura Modal nel componente Main. Questo deve poi essere modificato secondo le esigenze

export class MainComponent implements OnInit {

...

  constructor( private matDialog: MatDialog ) {  }

  openModal() {
    const dialogConfig = new MatDialogConfig();  // permette il passaggio di informazioni al modal
    dialogConfig.data = { name: "CiccioFranco"}; // oggetto da passare al modal 
    this.matDialog.open( DialogBodyComponent, dialogConfig); // apertura modal
  }

...

}

## Crare quindi il modal - Inserire HTML nel dialog-body.component.html  

<h2 mat-dialog-title>This is a Dialog title</h2>
<mat-dialog-content>

<p> {{ data.name }} </p>  // data.name è passato dal componente padre
</mat-dialog-content>

<mat-dialog-actions>
    <button class="mat-raised-button" (click)='close()' >Close</button>
</mat-dialog-actions>

## importare nel ts del componente modal MatDialogRef (usato per effettuare azioni sul componente stesso) e MAT_DIALOG_DATA (per utilizzare i dati passati dal padre)
import { MatDialogRef , MAT_DIALOG_DATA } from "@angular/material/dialog";

## Nel componente del modal fare l'inject nel costrttore di MatDialogRef e MAT_DIALOG_DATA
 constructor(  public dialogRef: MatDialogRef<DialogBodyComponent> , //modal stesso
               @Inject(MAT_DIALOG_DATA) public data: any // oggetto passato dal padre
             ) {}

## aggiungrere al componente il metodo di chiusura
close() {  // chiamato nell'html del compontente dall'evento (click)
    this.dialogRef.close("Thanks for using me!");
  }

