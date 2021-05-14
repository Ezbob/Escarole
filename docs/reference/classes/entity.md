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

Defined in: [entity.ts:6](https://github.com/Ezbob/Escarole/blob/1e762df/src/entity.ts#L6)

## Properties

### componentRegistry

• `Private` **componentRegistry**: *ComponentRegistry*

Defined in: [entity.ts:5](https://github.com/Ezbob/Escarole/blob/1e762df/src/entity.ts#L5)

___

### components

• `Private` **components**: *Map*<number, any\>

Defined in: [entity.ts:6](https://github.com/Ezbob/Escarole/blob/1e762df/src/entity.ts#L6)

___

### id

• `Readonly` **id**: *number*

Defined in: [entity.ts:4](https://github.com/Ezbob/Escarole/blob/1e762df/src/entity.ts#L4)

## Methods

### addComponent

▸ **addComponent**(...`components`: ComponentInstance[]): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `...components` | ComponentInstance[] |

**Returns:** *void*

Defined in: [entity.ts:25](https://github.com/Ezbob/Escarole/blob/1e762df/src/entity.ts#L25)

___

### deleteComponent

▸ **deleteComponent**(...`components`: *ComponentConstructor*<any\>[]): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `...components` | *ComponentConstructor*<any\>[] |

**Returns:** *void*

Defined in: [entity.ts:18](https://github.com/Ezbob/Escarole/blob/1e762df/src/entity.ts#L18)

___

### getComponent

▸ **getComponent**<T\>(`c`: *ComponentConstructor*<T\>): *undefined* \| T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | *ComponentConstructor*<T\> |

**Returns:** *undefined* \| T

Defined in: [entity.ts:13](https://github.com/Ezbob/Escarole/blob/1e762df/src/entity.ts#L13)
