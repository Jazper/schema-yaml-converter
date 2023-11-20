import { Component } from '@angular/core';

import { ISchema } from 'ngx-schema-form';
// import schema1 from '../../../dwh-notifier-validation-schema.json';
// import schema2 from '../../../dwh-xdm-validation-schema.json';
// import schema3 from '../../../dwh-raw-validation-schema.json';
// import schema4 from '../../../dwh-freezer-validation-schema.json';
// import schema5 from '../../../clickstream-validation-schema.json';
import { stringify } from 'yaml';
import { ActivatedRoute } from '@angular/router';
import { from, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  schema: ISchema | null = null;

  selectedFile: any;

  yamlText: any;
  fileName: string = 'fileName';

  constructor(public readonly activatedRoute: ActivatedRoute) {
    // this.activatedRoute.params
    //   .pipe(
    //     switchMap(params => {
    //       return from(fetch(`../../${params['schema']}.json`));
    //     }),
    //   )
    //   .subscribe(result => {
    //     console.log(result);
    //   });
  }

  onChange(json: string): void {
    this.yamlText = stringify(json);
  }

  uploadFile(event: any) {
    const fileReader = new FileReader();

    this.selectedFile = event.target.files[0];

    this.fileName = this.selectedFile.name;

    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = () => {
      this.schema = JSON.parse(fileReader.result!.toString());
    };
    fileReader.onerror = error => {
      console.log(error);
    };
  }

  // loadFile(fileName: string): void {}

  download(): void {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.yamlText));
    element.setAttribute('download', `${this.fileName}.yaml`);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
}
