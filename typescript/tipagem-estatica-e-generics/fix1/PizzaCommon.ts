import PizzaI from "./pizza";
import { Common } from './PizzaFlavorsTypes';

export default interface PizzaCommon extends PizzaI {
  flavor: Common;
}
