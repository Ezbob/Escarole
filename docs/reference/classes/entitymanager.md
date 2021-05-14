[escarole](../README.md) / [Exports](../modules.md) / EntityManager

# Class: EntityManager

## Table of contents

### Constructors

- [constructor](entitymanager.md#constructor)

### Properties

- [componentRegistry](entitymanager.md#componentregistry)
- [entities](entitymanager.md#entities)
- [nextId](entitymanager.md#nextid)

### Accessors

- [length](entitymanager.md#length)

### Methods

- [[Symbol.iterator]](entitymanager.md#[symbol.iterator])
- [createEntity](entitymanager.md#createentity)
- [deleteEntity](entitymanager.md#deleteentity)
- [getEntities](entitymanager.md#getentities)
- [getNextId](entitymanager.md#getnextid)

## Constructors

### constructor

\+ **new EntityManager**(): [*EntityManager*](entitymanager.md)

**Returns:** [*EntityManager*](entitymanager.md)

## Properties

### componentRegistry

• `Private` **componentRegistry**: *ComponentRegistry*

An instance of ComponentRegistry. Associates the component constructors with component ids, which
are used in entities queries.

Defined in: [entityManager.ts:19](https://github.com/Ezbob/Escarole/blob/1e762df/src/entityManager.ts#L19)

___

### entities

• `Private` **entities**: [*Entity*](entity.md)[]= []

Internal pool of entities

Defined in: [entityManager.ts:13](https://github.com/Ezbob/Escarole/blob/1e762df/src/entityManager.ts#L13)

___

### nextId

• `Private` **nextId**: *number*= 0

Entity id cache

Defined in: [entityManager.ts:8](https://github.com/Ezbob/Escarole/blob/1e762df/src/entityManager.ts#L8)

## Accessors

### length

• get **length**(): *number*

Get the number of entities in this EntityManager

**Returns:** *number*

Defined in: [entityManager.ts:84](https://github.com/Ezbob/Escarole/blob/1e762df/src/entityManager.ts#L84)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator*<[*Entity*](entity.md)\>

Iterate over all the entities of this EntityManager

**Returns:** *IterableIterator*<[*Entity*](entity.md)\>

Defined in: [entityManager.ts:91](https://github.com/Ezbob/Escarole/blob/1e762df/src/entityManager.ts#L91)

___

### createEntity

▸ **createEntity**(...`components`: ComponentInstance[]): [*Entity*](entity.md)

Creates and places an entity in this EntityManager, given the supplied component instances.

**`remark`** The component instances need to have an named constructor associated with them.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...components` | ComponentInstance[] | A variadic argument list of component instances to be associated with the new Entity |

**Returns:** [*Entity*](entity.md)

the newly created entity

Defined in: [entityManager.ts:36](https://github.com/Ezbob/Escarole/blob/1e762df/src/entityManager.ts#L36)

___

### deleteEntity

▸ **deleteEntity**(`entity`: [*Entity*](entity.md)): *void*

Deletes the supplied entity from the EntityManager array pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [*Entity*](entity.md) | Entity to be deleted |

**Returns:** *void*

Defined in: [entityManager.ts:47](https://github.com/Ezbob/Escarole/blob/1e762df/src/entityManager.ts#L47)

___

### getEntities

▸ **getEntities**(...`components`: *ComponentConstructor*<any\>[]): *Generator*<[*Entity*](entity.md), void, unknown\>

Get an Entity iterator over a subset of the entities, that has the parsed component types, or
an Entity iterator over all entities, if no component types are supplied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...components` | *ComponentConstructor*<any\>[] | A set of component constructor to filter for |

**Returns:** *Generator*<[*Entity*](entity.md), void, unknown\>

An iteratable object instance over the entities

Defined in: [entityManager.ts:62](https://github.com/Ezbob/Escarole/blob/1e762df/src/entityManager.ts#L62)

___

### getNextId

▸ `Private` **getNextId**(): *number*

Generates an id number for identifying entities

**Returns:** *number*

The next entity id

Defined in: [entityManager.ts:25](https://github.com/Ezbob/Escarole/blob/1e762df/src/entityManager.ts#L25)
