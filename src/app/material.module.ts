import { NgModule }           from '@angular/core';
import { MatButtonModule,
         MatCheckboxModule }  from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
//-----------------------------------------------------------------------------

@NgModule({
    imports: [ MatButtonModule,
               MatCheckboxModule,
               MatFormFieldModule,
               MatInputModule
             ],
    exports: [ MatButtonModule,
               MatCheckboxModule,
               MatFormFieldModule,
               MatInputModule
             ]
})
export class MaterialModule {}