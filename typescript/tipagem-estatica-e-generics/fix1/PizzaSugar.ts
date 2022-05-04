import PizzaI from "./pizza";
import { Sugar } from './PizzaFlavorsTypes';

export default interface PizzaSugar extends PizzaI {
  flavor: Sugar,
  slices: 4
}