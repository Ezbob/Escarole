declare module "ComponentRegistry" {
    export class ComponentRegistry {
        private componentIds;
        private nextId;
        register(c: ComponentConstructor): number;
        getId(c: ComponentConstructor): number | undefined;
    }
}
declare module "Entity" {
    import { ComponentRegistry } from "ComponentRegistry";
    export class Entity {
        readonly id: number;
        private componentRegistry;
        private components;
        constructor(componentRegistry: ComponentRegistry, id: number);
        getComponent<T>(c: ComponentConstructor<T>): T | undefined;
        deleteComponent(...components: ComponentConstructor[]): void;
        addComponent(...components: ComponentInstance[]): void;
    }
}
declare module "EntityManager" {
    import { Entity } from "Entity";
    export class EntityManager {
        private nextId;
        private entities;
        private componentRegistry;
        private getNextId;
        createEntity(...components: ComponentInstance[]): Entity;
        deleteEntity(entity: Entity): void;
        getEntities(...components: ComponentConstructor[]): Generator<Entity, void, unknown>;
        get length(): number;
        [Symbol.iterator](): Generator<Entity>;
    }
}
declare type ComponentConstructor<T = any> = {
    new (...a: any): T;
};
declare type ComponentInstance = {
    constructor: Function;
};
