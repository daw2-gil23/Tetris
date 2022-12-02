// Import our custom CSS
import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';
import { panel } from './panels.js';
import { ModeloPieza } from './clases/ModeloPieza.js';

panel.pintapanel()

const pieza = new ModeloPieza(1)
