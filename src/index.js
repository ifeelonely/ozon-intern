import { App } from './App.js';
import { CustomFramework } from './framework/CustomFramework.js';
import './globals.css';

const { app } = new App();
const root = new CustomFramework('root', app);
root.render();
