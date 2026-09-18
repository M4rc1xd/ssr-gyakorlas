import { Controller, Get, Render } from '@nestjs/common';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { AppService } from './app.service.js';
import { Wanted } from './wanted.interface.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    // return {
    //   title: 'My first EJS app'
    // }
  }

  @Get('bekezdesek')
  @Render('bekezdesek')
  getBekezdesek() {
    return {
      szoveg: ['Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.', 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.', 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.', 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.']
    }
  }
  
  @Get('piros-kek')
  @Render('red-blue')
  getPirosKek() {
    const rand = Math.floor(Math.random() * 2);
    if(rand === 0) {
      return {
        szin: '#0000ff'
      }
    } else {
      return {
        szin: '#ff0000'
      }
    }
  }

  @Get('wanted')
  @Render('wanted')
  getWanted() {
  const wantedPath = fileURLToPath(new URL('./wanted.json', import.meta.url));
  const wanted = JSON.parse(readFileSync(wantedPath, 'utf8')) as Wanted;

  return { wanted };
  }
}
