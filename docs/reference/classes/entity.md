[escarole](../README.md) / [Exports](../modules.md) / Entity

# Class: Entity

## Table of contents

### Constructors

- [constructor](entity.md#constructor)

### Properties

- [components](entity.md#components)
- [id](entity.md#id)

### Methods

- [addComponent](entity.md#addcomponent)
- [deleteComponent](entity.md#deletecomponent)
- [getComponent](entity.md#getcomponent)

## Constructors

### constructor

\+ **new Entity**(`id`: *number*): [*Entity*](entity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | *number* |

**Returns:** [*Entity*](entity.md)

Defined in: [entity.ts:11](https://github.com/Ezbob/Escarole/blob/fe24352/src/entity.ts#L11)

## Properties

### components

• `Private` **components**: *Map*<ComponentConstructor<any\>, ComponentInstance\>

Internal map from component ids (usually fetched from a ComponentRegistry) to the associated
component instances of this entity

Defined in: [entity.ts:11](https://github.com/Ezbob/Escarole/blob/fe24352/src/entity.ts#L11)

___

### id

• `Readonly` **id**: *number*

Readonly identify number of the entity.

Defined in: [entity.ts:5](https://github.com/Ezbob/Escarole/blob/fe24352/src/entity.ts#L5)

## Methods

### addComponent

▸ **addComponent**(...`components`: ComponentInstance[]): *void*

Add one or more components to this Entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...components` | ComponentInstance[] | A variadic list of ComponentConstructors to add to this Entity |

**Returns:** *void*

Defined in: [entity.ts:41](https://github.com/Ezbob/Escarole/blob/fe24352/src/entity.ts#L41)

___

### deleteComponent

▸ **deleteComponent**(...`components`: *ComponentConstructor*<any\>[]): *void*

Delete one or more components that is associated with this Entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...components` | *ComponentConstructor*<any\>[] | A variadic list of ComponentConstructors to delete from this Entity |

**Returns:** *void*

Defined in: [entity.ts:31](https://github.com/Ezbob/Escarole/blob/fe24352/src/entity.ts#L31)

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

Defined in: [entity.ts:23](https://github.com/Ezbob/Escarole/blob/fe24352/src/entity.ts#L23)
