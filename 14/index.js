// 4 Розділення коду на модулі
import {summ, minus, multiply, divide} from './mathOperations.js';
summ(1, 2);    
minus(2, 1);    
multiply(2, 6);  
divide(10, 0);

// 5 Імпорт утиліти для роботи з текстом
import { upperCase, reverse } from './stringUtilities.js';
upperCase('Hello User');
reverse('Hello User');