[escarole](../README.md) / [Exports](../modules.md) / Entity

# Class: Entity

## Table of contents

### Constructors

- [constructor](entity.md#constructor)

### Properties

- [componentRegistry](entity.md#componentregistry)
- [components](entity.md#components)
- [id](entity.md#id)

### Methods

- [addComponent](entity.md#addcomponent)
- [deleteComponent](entity.md#deletecomponent)
- [getComponent](entity.md#getcomponent)

## Constructors

### constructor

\+ **new Entity**(`componentRegistry`: *ComponentRegistry*, `id`: *number*): [*Entity*](entity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `componentRegistry` | *ComponentRegistry* |
| `id` | *number* |

**Returns:** [*Entity*](entity.md)

Defined in: [entity.ts:19](https://github.com/Ezbob/Escarole/blob/9ca131f/src/entity.ts#L19)

## Properties

### componentRegistry

• `Private` **componentRegistry**: *ComponentRegistry*

ComponentRegistry associates the component constructor to ids.
This is usually a reference parsed to the entity.

Defined in: [entity.ts:13](https://github.com/Ezbob/Escarole/blob/9ca131f/src/entity.ts#L13)

___

### components

• `Private` **components**: *Map*<number, any\>

Internal map from component ids (usually fetched from a ComponentRegistry) to the associated
component instances of this entity

Defined in: [entity.ts:19](https://github.com/Ezbob/Escarole/blob/9ca131f/src/entity.ts#L19)

___

### id

• `Readonly` **id**: *number*

Readonly identify number of the entity.

Defined in: [entity.ts:7](https://github.com/Ezbob/Escarole/blob/9ca131f/src/entity.ts#L7)

## Methods

### addComponent

▸ **addComponent**(...`components`: ComponentInstance[]): *void*

Add one or more components to this Entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...components` | ComponentInstance[] | A variadic list of ComponentConstructors to add to this Entity |

**Returns:** *void*

Defined in: [entity.ts:52](https://github.com/Ezbob/Escarole/blob/9ca131f/src/entity.ts#L52)

___

### deleteComponent

▸ **deleteComponent**(...`components`: *ComponentConstructor*<any\>[]): *void*

Delete one or more components that is associated with this Entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...components` | *ComponentConstructor*<any\>[] | A variadic list of ComponentConstructors to delete from this Entity |

**Returns:** *void*

Defined in: [entity.ts:41](https://github.com/Ezbob/Escarole/blob/9ca131f/src/entity.ts#L41)

___

### getComponent

▸ **getComponent**<T\>(`c`: *ComponentConstructor*<T\>): *undefined* \| T

Get the component instance of a specific ComponentConstructor type

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | *ComponentConstructor*<T\> | ComponentConstructor type to get a instance for |

**Returns:** *undefined* \| T

A object instance of ComponentConstructor type iff the Entity has
a component of the ComponentConstructor type or undefined otherwise.

Defined in: [entity.ts:32](https://github.com/Ezbob/Escarole/blob/9ca131f/src/entity.ts#L32)
