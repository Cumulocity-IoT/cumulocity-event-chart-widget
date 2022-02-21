/**
 * Copyright (c) 2020 Software AG, Darmstadt, Germany and/or its licensors
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '@c8y/ngx-components';
import { AppComponent } from './app.component';
import { BasicAuth, Client, InventoryService, EventService, Realtime } from '@c8y/client';
import { GpLibEventChartModule } from '../../projects/gp-event-chart/src/lib/gp-lib-event-chart.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const auth = new BasicAuth({
  user: '',
  password: '',
  tenant: ''
});

const client = new Client(auth, 'http://localhost:4200');
client.setAuth(auth);
const fetchClient = client.core;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GpLibEventChartModule,
    BrowserAnimationsModule,
    CoreModule.forRoot()
  ],
  providers: [
    {
      provide: InventoryService,
      useFactory: () => {
        return new InventoryService(fetchClient);
        }
    },
    {
      provide: EventService,
      useFactory: () => {
        return new EventService(fetchClient);
        }
    },
    {
      provide: Realtime,
      useFactory: () => {
        return new Realtime(fetchClient);
        }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
