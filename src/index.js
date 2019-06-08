import _ from 'lodash'
import { Nijo } from './utilities'
import * as utilities from './utilities'
import Lion from './utilities'

console.log(utilities.Nijo(2));


function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!!']
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component())

