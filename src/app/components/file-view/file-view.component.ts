import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent {

  /**
   * @rxdoc component
   * @name filesView
   *
   * @description
   * filesView is a UI Component that allows to display, download, remove files.
   * Component is displayed a thumbnail and name of a file.
   * Also, you can configure remove, download file.
   *
   * Example:
   * <files-view [files]="files"
   *             [removeFile]="removeFile"
   *             [downloadFile]="downloadFile">
   * </files-view>
   */

  @Input() files: Array<Object> = [];
  @Input() removeFile: Function;
  @Input() downloadFile: Function;

  download(index: number) {
    const file: any = this.files[index];

    this.downloadFile(index)
      .then(function (path: string) {
        setTimeout(() => {
          const a = document.createElement('a');
          document.body.appendChild(a);
          a.style.display = 'none';
          a.href = path;
          a.download = file.name;
          a.click();
          document.body.removeChild(a);
        }, 0);
      })
      .catch(() => {});
  }
}
