<p align="center">
  <img width="200" src="https://github.com/Ezbob/Escarole/blob/98b96f5b2ebc90d116d6b87a6e2e3ef03aec95d3/docs/logo.png" alt="Escarole Logo">
</p>

---

Entity System Component library for typescript and javascript.

<!--
## Installation

```shell
$ npm install escarole --save
```
-->

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

const entityManager = new EntityManger()

let entity1 = entity.createEntity(new VelocityComponent(), new PositionComponent())

let entity2 = entity.createEntity(new PositionComponent())

```
Entities also be can be removed by `deleteEntity` with the desired entity on the `EntityManager`.

Iterating through all entities can be done via the `getEntities` method of the `EntityManager`:

```typescript

// Iterate through all entities in the manager
for (let entity of entityManager.getEntities()) {
  // ...
}

// Select entities, which only has the both the PositionComponent and VelocityComponent (i.e. a entity with only a PositionComponent or VelocityComponent  will not be selected)
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


## License


[Apache 2.0](https://opensource.org/licenses/Apache-2.0)