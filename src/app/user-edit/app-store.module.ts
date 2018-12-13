import { NgModule } from '@angular/core';
// ngrx
import { StoreModule } from '@ngrx/store';
import { reducer } from '../../state/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    imports: [StoreModule.forRoot({ appState: reducer }), StoreDevtoolsModule.instrument({ name: 'Devtools' })]
})
export class AppStoreModule {}
