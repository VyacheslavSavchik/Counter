import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {Counter} from './Counter';
import {Provider} from "react-redux";
import {store} from "./state/store";



const container  = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(<Provider store={store}> <Counter /></Provider>);
