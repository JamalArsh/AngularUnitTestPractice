import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
})
export class FileSizePipe implements PipeTransform {
  transform(size: number, extension: string = 'MB'): any {
    return 'File size is - ' + (size / (1024 * 1024)).toFixed(2) + extension;
  }
}
