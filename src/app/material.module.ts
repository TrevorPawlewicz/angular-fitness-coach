import { NgModule }                 from '@angular/core';
import { MatButtonModule,
         MatCheckboxModule }        from '@angular/material';
import { MatFormFieldModule }       from '@angular/material/form-field';
import { MatInputModule }           from '@angular/material/input';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { FlexLayoutModule }         from '@angular/flex-layout';
//-----------------------------------------------------------------------------

@NgModule({
    imports: [ MatButtonModule,
               MatCheckboxModule,
               MatFormFieldModule,
               MatInputModule,
               BrowserAnimationsModule,
               FlexLayoutModule
             ],
    exports: [ MatButtonModule,
               MatCheckboxModule,
               MatFormFieldModule,
               MatInputModule,
               BrowserAnimationsModule,
               FlexLayoutModule
             ]
})
export class MaterialModule {}
