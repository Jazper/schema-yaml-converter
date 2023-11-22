import { Component } from '@angular/core';

import { stringify } from 'yaml';
import { ActivatedRoute } from '@angular/router';
import { JsonPointer } from '@ajsf/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  schema: any = null;

  selectedFile: any;

  yamlText: any;
  fileName = '';
  formIsValid = false;
  formValidationErrors: any;

  get prettyValidationErrors() {
    if (!this.formValidationErrors) {
      return null;
    }
    const errorArray = [];
    for (const error of this.formValidationErrors) {
      const message = error.message;
      const dataPathArray = JsonPointer.parse(error.dataPath);
      if (dataPathArray.length) {
        let field = dataPathArray[0];
        for (let i = 1; i < dataPathArray.length; i++) {
          const key = dataPathArray[i];
          field += /^\d+$/.test(key) ? `[${key}]` : `.${key}`;
        }
        errorArray.push(`${field}: ${message}`);
      } else {
        errorArray.push(message);
      }
    }
    return errorArray.join('<br>');
  }

  constructor(public readonly activatedRoute: ActivatedRoute) {}

  onChange(json: string): void {
    this.yamlText = stringify(json);
  }

  uploadFile(event: any) {
    this.formValidationErrors = null;

    const fileReader = new FileReader();

    this.selectedFile = event.target.files[0];

    this.fileName = this.selectedFile.name;

    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = () => {
      this.schema = {
        schema: JSON.parse(fileReader.result!.toString()),
      };
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

  isValid($event: boolean) {
    console.log($event);
    this.formIsValid = $event;
  }

  validationErrors(data: any): void {
    this.formValidationErrors = data;
  }
}
