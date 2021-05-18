[escarole](../README.md) / [Exports](../modules.md) / EntityManager

# Class: EntityManager

EntityManager is the facade class for creating, delete and querying Entities, by
keeping an internal array of Entity objects.

## Table of contents

### Constructors

- [constructor](entitymanager.md#constructor)

### Properties

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

### entities

• `Private` **entities**: [*Entity*](entity.md)[]= []

Internal pool of entities

Defined in: [entityManager.ts:16](https://github.com/Ezbob/Escarole/blob/28233ea/src/entityManager.ts#L16)

___

### nextId

• `Private` **nextId**: *number*= 0

Entity id cache

Defined in: [entityManager.ts:11](https://github.com/Ezbob/Escarole/blob/28233ea/src/entityManager.ts#L11)

## Accessors

### length

• get **length**(): *number*

Get the number of entities in this EntityManager

**Returns:** *number*

Defined in: [entityManager.ts:81](https://github.com/Ezbob/Escarole/blob/28233ea/src/entityManager.ts#L81)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator*<[*Entity*](entity.md)\>

Iterate over all the entities of this EntityManager

**Returns:** *IterableIterator*<[*Entity*](entity.md)\>

Defined in: [entityManager.ts:88](https://github.com/Ezbob/Escarole/blob/28233ea/src/entityManager.ts#L88)

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

Defined in: [entityManager.ts:33](https://github.com/Ezbob/Escarole/blob/28233ea/src/entityManager.ts#L33)

___

### deleteEntity

▸ **deleteEntity**(`entity`: [*Entity*](entity.md)): *void*

Deletes the supplied entity from the EntityManager array pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [*Entity*](entity.md) | Entity to be deleted |

**Returns:** *void*

Defined in: [entityManager.ts:44](https://github.com/Ezbob/Escarole/blob/28233ea/src/entityManager.ts#L44)

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

Defined in: [entityManager.ts:59](https://github.com/Ezbob/Escarole/blob/28233ea/src/entityManager.ts#L59)

___

### getNextId

▸ `Private` **getNextId**(): *number*

Generates an id number for identifying entities

**Returns:** *number*

The next entity id

Defined in: [entityManager.ts:22](https://github.com/Ezbob/Escarole/blob/28233ea/src/entityManager.ts#L22)
