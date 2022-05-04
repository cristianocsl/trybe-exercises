import PizzaI from "./pizza";
import { Vegetarian } from './PizzaFlavorsTypes';

export default interface PizzaVegetarian extends PizzaI {
  flavor: Vegetarian;
}
