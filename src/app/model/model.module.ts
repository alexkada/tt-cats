import { NgModule } from '@angular/core';
import { CatStaticDataSource } from './cat-static.datasource';

import { CatRepository } from './cat.repository';
import {HttpClientModule} from '@angular/common/http';
// import { RestDataSource } from './rest.datasource';

@NgModule({
    imports: [HttpClientModule],
    providers: [
                CatRepository,
                CatStaticDataSource]
})
export class ModelModule { }
