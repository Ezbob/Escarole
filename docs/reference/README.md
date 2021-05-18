escarole / [Exports](modules.md)

<p align="center">
  <img width="200" src="https://raw.githubusercontent.com/Ezbob/Escarole/trunk/docs/logo.png" alt="Escarole Logo">
</p>

[![CI](https://github.com/Ezbob/Escarole/actions/workflows/main.yml/badge.svg?branch=trunk)](https://github.com/Ezbob/Escarole/actions/workflows/main.yml)
[![npm version](https://badge.fury.io/js/escarole.svg)](https://badge.fury.io/js/escarole)
<div align="left">
  <img src="https://raw.githubusercontent.com/Ezbob/Escarole/trunk/docs/badges/badge-branches.svg" alt="Coverage Branches">
  <img src="https://raw.githubusercontent.com/Ezbob/Escarole/trunk/docs/badges/badge-functions.svg" alt="Coverage Functions">
  <img src="https://raw.githubusercontent.com/Ezbob/Escarole/trunk/docs/badges/badge-lines.svg" alt="Coverage Lines">
  <img src="https://raw.githubusercontent.com/Ezbob/Escarole/trunk/docs/badges/badge-statements.svg" alt="Coverage Statements">
</div>

---

Entity System Component library for typescript and javascript.

## Installation

```bash
$ npm install escarole --save
```

## Usage

### Using components

This library requires that components are defined by classes or functions (the old style of doing object oriented style in Javascript). 

Thus to define a you simply define a component class:

```typescript
class VelocityComponent {
  constructor(
    public x: number,
    public y: number
  ) {}
}

class PositionComponent {
  constructor(
    public x: number,
    public y: number
  ) {}
}
```

### Using an EntityManager

As an entity is comprised by components, we can create entities by first creating a `EntityManager`, and then invoking `createEntity` with the desired instantiate of components:

```typescript
import {EntityManager} from `escarole`

const entityManager = new EntityManager()
 
let entity1 = entityManager.createEntity(new VelocityComponent(), new PositionComponent())
 
let entity2 = entityManager.createEntity(new PositionComponent())

```
Entities also be can be removed by `deleteEntity` with the desired entity on the `EntityManager`.

Iterating through all entities can be done via the `getEntities` method of the `EntityManager`:

```typescript

// Iterate through all entities in the manager
for (let entity of entityManager.getEntities()) {
  // ...
}

// Select entities, which only has the both the PositionComponent and
// VelocityComponent (i.e. a entity with only a PositionComponent or
// VelocityComponent  will not be selected)
for (let entity of entityManager.getEntities(PositionComponent, VelocityComponent)) {
  // ...
}
```
A shorthand for iterating over all the entities is also available:
```typescript

// This will iterate through all entities
for (let entity of entityManager) {
  // ...
}
```

### Using an Entity

Once you have your hands on a Entity you can get one of its associated component by invoking `getComponent` on a entity. This will give you the associated component instance if the entity has one, or a value of `undefined` if it's not there:

```typescript
for (let entity of entityManager) {
  let position = entity.getComponent(PositionComponent)
  if (position) {
    // Here we have selected entities with a position component
    position.x += 1
    position.y += 2
  }
}

// The previous loop is equivalent to the following loop

for (let entity of entityManager.getEntities(PositionComponent)) {
  let position = entity.getComponent(PositionComponent)
  position.x += 1
  position.y += 2
}
```

Like entities in a `EntityManager`, components can also be removed from an `Entity` or added to it:

```typescript
for (let entity of entityManager.getEntities(PositionComponent)) {
  let position = entity.getComponent(PositionComponent)
  position.x += 1
  position.y += 2

  if (position.x > 10) {
    // suddenly the entity has velocity !
    entity.addComponent(new VelocityComponent())
  }
}

for (let entity of entityManager.getEntities(VelocityComponent, PositionComponent)) {
  // now the entities which has gained velocity will be considered here too
  let position = entity.getComponent(PositionComponent)
  let velocity = entity.getComponent(VelocityComponent)
  position.x -= 1 + velocity.x * 10
  position.y += 2 + velocity.y * 5

  if (position.x < 1) {
    // now our entity does not velocity anymore
    entity.deleteComponent(VelocityComponent)
  }
}
```

### Using a System

System are the transform unit of a Entity Component System architecture. Escarole does not provide a specific abstraction to model a system. Rather, functions or methods are used to implement a system.

## Reference documentation

You can find the reference documentation [here](docs/reference/modules.md).

## License

[Apache 2.0](https://opensource.org/licenses/Apache-2.0)
