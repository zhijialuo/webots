'use strict';

import NodeFactory from './NodeFactory.js';
import {VRML} from './constants.js';
//import BaseNode from './BaseNode.js';
import Node from './Node.js';


class SingleValue {
  #value;
  constructor(tokenizer) {
    if (typeof tokenizer !== 'undefined')
      this.setValueFromTokenizer(tokenizer);
  }


  get value() {
    return this.#value;
  }

  set value(v) {
    this.#value = v;
  }


  toX3d(parameterName, parentElement) {
    if (typeof parentElement !== 'undefined') { // this is the case if this instance is a member of an MF*
      parentElement.setAttribute(parameterName, this.value);
      return;
    }

    return this.value;
  }

  toJS() {
    return this.value;
  }

  equals(other) {
    return this.value === other.value;
  }
}

export class SFBool extends SingleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    super.value = tokenizer.nextToken().toBool();
  }

  type() {
    return VRML.SFBool;
  }

  clone() {
    const copy = new SFBool();

    if (typeof this.value !== 'undefined')
      copy.value = this.value;

    return copy;
  }
}

export class SFInt32 extends SingleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    super.value = tokenizer.nextToken().toInt();
  }

  type() {
    return VRML.SFInt32;
  }

  clone() {
    const copy = new SFInt32();

    if (typeof this.value !== 'undefined')
      copy.value = this.value;

    return copy;
  }
}

export class SFFloat extends SingleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    this.value = tokenizer.nextToken().toFloat();
  }

  type() {
    return VRML.SFFloat;
  }

  clone() {
    const copy = new SFFloat();

    if (typeof this.value !== 'undefined')
      copy.value = this.value;

    return copy;
  }
}

export class SFString extends SingleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    this.value = tokenizer.nextWord();
  }

  type() {
    return VRML.SFString;
  }

  clone() {
    const copy = new SFString();

    if (typeof this.value !== 'undefined')
      copy.value = this.value;

    return copy;
  }
}

export class SFVec2f extends SingleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    this.value = {x: tokenizer.nextToken().toFloat(), y: tokenizer.nextToken().toFloat()};
  }

  toX3d(parameterName, parentElement) {
    if (typeof parentElement !== 'undefined') { // this is the case if this instance is a member of an MF*
      parentElement.setAttribute(parameterName, `${this.value.x} ${this.value.y}`);
      return;
    }

    return `${this.value.x} ${this.value.y}`;
  }

  toJS() {
    return `{x: ${this.value.x}, y: ${this.value.y}}`;
  }

  equals(other) {
    if (typeof this.value === 'undefined' || typeof other.value === 'undefined')
      return false;

    return this.value.x === other.value.x && this.value.y === other.value.y;
  }

  type() {
    return VRML.SFVec2f;
  }

  clone() {
    const copy = new SFVec2f();

    if (typeof this.value !== 'undefined')
      copy.value = JSON.parse(JSON.stringify(this.value));

    return copy;
  }
}

export class SFVec3f extends SingleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    this.value = {x: tokenizer.nextToken().toFloat(), y: tokenizer.nextToken().toFloat(), z: tokenizer.nextToken().toFloat()};
  }

  toX3d(parameterName, parentElement) {
    if (typeof parentElement !== 'undefined') { // this is the case if this instance is an item of a MF*
      parentElement.setAttribute(parameterName, `${this.value.x} ${this.value.y} ${this.value.z}`);
      return;
    }

    return `${this.value.x} ${this.value.y} ${this.value.z}`;
  }

  toJS() {
    return `{x: ${this.value.x}, y: ${this.value.y}, z: ${this.value.z}}`;
  }

  equals(other) {
    if (typeof this.value === 'undefined' || typeof other.value === 'undefined')
      return false;

    return this.value.x === other.value.x && this.value.y === other.value.y && this.value.z === other.value.z;
  }

  type() {
    return VRML.SFVec3f;
  }

  clone() {
    const copy = new SFVec3f();

    if (typeof this.value !== 'undefined')
      copy.value = JSON.parse(JSON.stringify(this.value));

    return copy;
  }
}

export class SFColor extends SingleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    this.value = {r: tokenizer.nextToken().toFloat(), g: tokenizer.nextToken().toFloat(), b: tokenizer.nextToken().toFloat()};
  }

  toX3d(parameterName, parentElement) {
    if (typeof parentElement !== 'undefined') { // this is the case if this instance is an item of a MF*
      parentElement.setAttribute(parameterName, `${this.value.r} ${this.value.g} ${this.value.b}`);
      return;
    }

    return `${this.value.r} ${this.value.g} ${this.value.b}`;
  }

  toJS() {
    return `{r: ${this.value.r}, g: ${this.value.g}, b: ${this.value.b}}`;
  }

  equals(other) {
    if (typeof this.value === 'undefined' || typeof other.value === 'undefined')
      return false;

    return this.value.r === other.value.r && this.value.g === other.value.g && this.value.b === other.value.b;
  }

  type() {
    return VRML.SFColor;
  }

  clone() {
    const copy = new SFColor();

    if (typeof this.value !== 'undefined')
      copy.value = JSON.parse(JSON.stringify(this.value));

    return copy;
  }
}

export class SFRotation extends SingleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    this.value = {x: tokenizer.nextToken().toFloat(), y: tokenizer.nextToken().toFloat(),
                  z: tokenizer.nextToken().toFloat(), a: tokenizer.nextToken().toFloat()};
  }

  toX3d(parameterName, parentElement) {
    if (typeof parentElement !== 'undefined') { // this is the case if this instance is an item of a MF*
      parentElement.setAttribute(parameterName, `${this.value.x} ${this.value.y} ${this.value.z} ${this.value.a}`);
      return;
    }

    return `${this.value.x} ${this.value.y} ${this.value.z} ${this.value.a}`;
  }

  toJS() {
    return `{x: ${this.value.x}, y: ${this.value.y}, z: ${this.value.z}, a: ${this.value.a}}`;
  }

  equals(other) {
    if (typeof this.value === 'undefined' || typeof other.value === 'undefined')
      return false;

    return this.value.x === other.value.x && this.value.y === other.value.y &&
           this.value.z === other.value.z && this.value.a === other.value.a;
  }

  type() {
    return VRML.SFRotation;
  }

  clone() {
    const copy = new SFRotation();

    if (typeof this.value !== 'undefined')
      copy.value = JSON.parse(JSON.stringify(this.value));

    return copy;
  }
}

export class SFNode extends SingleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    if (tokenizer.peekWord() === 'USE')
      this.isUse = true;

    const nodeFactory = new NodeFactory();
    this.value = nodeFactory.createNode(tokenizer);
  }

  toX3d(parameterName, parentElement) {
    if (typeof this.value === 'undefined')
      return;

    const nodeX3d = this.value.toX3d(this.isUse, parameterName);

    // handle exceptions
    if (this.value.name === 'ImageTexture')
      nodeX3d.setAttribute('role', parameterName.slice(0, -3)); // TODO: rename on the JS side so it matches the field name?
    else if (['Shape', 'Group', 'Transform', 'Solid', 'Robot'].includes(this.value.name)) {
      if (parameterName === 'boundingObject')
        nodeX3d.setAttribute('role', 'boundingObject');
    } else if (['BallJointParameters', 'JointParameters', 'HingeJointParameters'].includes(this.value.name))
      nodeX3d.setAttribute('role', parameterName); // identifies which jointParameter slot the node belongs to
    else if (['Brake', 'PositionSensor', 'Motor'].includes(this.value.name))
      nodeX3d.setAttribute('role', parameterName); // identifies which device slot the node belongs to

    if (typeof nodeX3d !== 'undefined')
      parentElement.appendChild(nodeX3d);
  }

  toJS() {
    if (typeof this.value === 'undefined')
      return;

    return this.value.toJS();
  }

  equals(other) {
    throw new Error('TODO: equals for SFNode')
  }

  type() {
    return VRML.SFNode;
  }

  clone() {
    const copy = new SFNode();

    if (typeof this.value !== 'undefined')
      copy.value = this.value.clone();

    return copy
  }
}


class MultipleValue {
  #value = [];
  constructor(tokenizer) {
    if (typeof tokenizer !== 'undefined')
      this.setValueFromTokenizer(tokenizer);
  }

  get value() {
    return this.#value;
  }

  set value(v) {
    if (!Array.isArray(v))
      this.#value.push(v);
    else
      this.#value = v;
  }

  insert(item) {
    this.#value.push(item);
  }

  toX3d(parameterName, parentElement) {
    let x3d = ''
    this.#value.forEach((item) => x3d += item.toX3d() + ' ');
    parentElement.setAttribute(parameterName, x3d.slice(0, -1));
  }

  toJS() {
    let js = '['
    this.#value.forEach((item) => js += item.toJS() + ', ');
    if (this.#value.length > 0)
      js == js.slice(0, -2)
    return  js + ']';
  }

  equals(other) {
    throw new Error('TODO: implement equals for MFBool');
  }
}

export class MFBool extends MultipleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    if (tokenizer.peekWord() === '[') {
      tokenizer.skipToken('[');

      while (tokenizer.peekWord() !== ']')
        this.insert(new SFBool(tokenizer));

      tokenizer.skipToken(']');
    } else
      this.insert(new SFBool(tokenizer));
  }

  equals(other) {
    throw new Error('TODO: implement equals for MFBool');
  }

  type() {
    return VRML.MFBool;
  }

  clone() {
    const copy = new MFBool();
    this.value.forEach((item) => copy.insert(item.clone()));
    return copy;
  }
}

export class MFInt32 extends MultipleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    if (tokenizer.peekWord() === '[') {
      tokenizer.skipToken('[');

      while (tokenizer.peekWord() !== ']')
        this.insert(new SFInt32(tokenizer));

      tokenizer.skipToken(']');
    } else
      this.insert(new SFInt32(tokenizer));
  }

  equals(other) {
    throw new Error('TODO: implement equals for MFInt32');
  }

  type() {
    return VRML.MFInt32;
  }

  clone() {
    const copy = new MFInt32();
    this.value.forEach((item) => copy.insert(item.clone()));
    return copy;
  }
}

export class MFFloat extends MultipleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    if (tokenizer.peekWord() === '[') {
      tokenizer.skipToken('[');

      while (tokenizer.peekWord() !== ']')
        this.insert(new SFFloat(tokenizer));

      tokenizer.skipToken(']');
    } else
      this.insert(new SFFloat(tokenizer));
  }

  equals(other) {
    throw new Error('TODO: implement equals for MFFloat');
  }

  type() {
    return VRML.MFFloat;
  }

  clone() {
    const copy = new MFFloat();
    this.value.forEach((item) => copy.insert(item.clone()));
    return copy;
  }
}

export class MFString extends MultipleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    if (tokenizer.peekWord() === '[') {
      tokenizer.skipToken('[');

      while (tokenizer.peekWord() !== ']')
        this.insert(new SFString(tokenizer));

      tokenizer.skipToken(']');
    } else
      this.insert(new SFString(tokenizer));
  }

  equals(other) {
    throw new Error('TODO: implement equals for MFString');
  }

  type() {
    return VRML.MFString;
  }

  clone() {
    const copy = new MFString();
    this.value.forEach((item) => copy.insert(item.clone()));
    return copy;
  }
}

export class MFVec2f extends MultipleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    if (tokenizer.peekWord() === '[') {
      tokenizer.skipToken('[');

      while (tokenizer.peekWord() !== ']')
        this.insert(new SFVec2f(tokenizer));

      tokenizer.skipToken(']');
    } else
      this.insert(new SFVec2f(tokenizer));
  }

  equals(other) {
    throw new Error('TODO: implement equals for MFVec2f');
  }

  type() {
    return VRML.MFVec2f;
  }

  clone() {
    const copy = new MFVec2f();
    this.value.forEach((item) => copy.insert(item.clone()));
    return copy;
  }
}

export class MFVec3f extends MultipleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    if (tokenizer.peekWord() === '[') {
      tokenizer.skipToken('[');

      while (tokenizer.peekWord() !== ']')
        this.insert(new SFVec3f(tokenizer));

      tokenizer.skipToken(']');
    } else
      this.insert(new SFVec3f(tokenizer));
  }

  equals(other) {
    throw new Error('TODO: implement equals for MFVec3f');
  }

  type() {
    return VRML.MFVec3f;
  }

  clone() {
    const copy = new MFVec3f();
    this.value.forEach((item) => copy.insert(item.clone()));
    return copy;
  }
}

export class MFColor extends MultipleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    if (tokenizer.peekWord() === '[') {
      tokenizer.skipToken('[');

      while (tokenizer.peekWord() !== ']')
        this.insert(new SFColor(tokenizer));

      tokenizer.skipToken(']');
    } else
      this.insert(new SFColor(tokenizer));
  }

  equals(other) {
    throw new Error('TODO: implement equals for MFColor');
  }

  type() {
    return VRML.MFColor;
  }

  clone() {
    const copy = new MFColor();
    this.value.forEach((item) => copy.insert(item.clone()));
    return copy;
  }
}

export class MFRotation extends MultipleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  setValueFromTokenizer(tokenizer) {
    if (tokenizer.peekWord() === '[') {
      tokenizer.skipToken('[');

      while (tokenizer.peekWord() !== ']')
        this.insert(new SFRotation(tokenizer));

      tokenizer.skipToken(']');
    } else
      this.insert(new SFRotation(tokenizer));
  }

  equals(other) {
    throw new Error('TODO: implement equals for MFRotation');
  }

  type() {
    return VRML.MFRotation;
  }

  clone() {
    const copy = new MFRotation();
    this.value.forEach((item) => copy.insert(item.clone()));
    return copy;
  }
}

export class MFNode extends MultipleValue {
  constructor(tokenizer) {
    super(tokenizer);
  }

  get value() {
    return super.value;
  }

  set value(v) {
    if (!Array.isArray(v)) {
      if (v instanceof Node) {
        // TODO: can we avoid doing this here and ensure it's sent as SFNode already?
        // TODO: still needed?
        const sf = new SFNode();
        sf.value = v;
        this.insert(sf);
      } else
        this.insert(v);
    }
    else
      super.value = v;
  }

  setValueFromTokenizer(tokenizer) {
    if (tokenizer.peekWord() === '[') {
      tokenizer.skipToken('[');

      while (tokenizer.peekWord() !== ']')
        this.insert(new SFNode(tokenizer));

      tokenizer.skipToken(']');
    } else
      this.insert(new SFNode(tokenizer));
  }

  toX3d(parameterName, parentElement) {
    this.value.forEach((item) => item.toX3d(parameterName, parentElement));
  }

  toJS() {
    let js = '['
    this.value.forEach((item) => js += item.value.toJS() + ', ');
    if (this.value.length > 0)
      js == js.slice(0, -2)
    return  js + ']';
  }

  equals(other) {
    throw new Error('TODO: implement equals for MFNode');
  }

  type() {
    return VRML.MFNode;
  }

  clone() {
    const copy = new MFNode();
    this.value.forEach((item) => copy.insert(item.clone()));
    return copy;
  }
}

export function typeFactory(type, tokenizer) {
  switch(type) {
    case VRML.SFBool:
      return new SFBool(tokenizer);
    case VRML.SFInt32:
      return new SFInt32(tokenizer);
    case VRML.SFFloat:
      return new SFFloat(tokenizer);
    case VRML.SFString:
      return new SFString(tokenizer);
    case VRML.SFVec2f:
      return new SFVec2f(tokenizer);
    case VRML.SFVec3f:
      return new SFVec3f(tokenizer);
    case VRML.SFColor:
      return new SFColor(tokenizer);
    case VRML.SFRotation:
      return new SFRotation(tokenizer);
    case VRML.SFNode:
      return new SFNode(tokenizer);
    case VRML.MFBool:
      return new MFBool(tokenizer);
    case VRML.MFInt32:
      return new MFInt32(tokenizer);
    case VRML.MFFloat:
      return new MFFloat(tokenizer);
    case VRML.MFString:
      return new MFString(tokenizer);
    case VRML.MFVec2f:
      return new MFVec2f(tokenizer);
    case VRML.MFVec3f:
      return new MFVec3f(tokenizer);
    case VRML.MFColor:
      return new MFColor(tokenizer);
    case VRML.MFRotation:
      return new MFRotation(tokenizer);
    case VRML.MFNode:
      return new MFNode(tokenizer);
    default:
      throw new Error('Unknown VRML type: ', type);
  }
}
