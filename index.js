System.register("ComponentRegistry", [], function (exports_1, context_1) {
    "use strict";
    var ComponentRegistry;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ComponentRegistry = class ComponentRegistry {
                constructor() {
                    this.componentIds = new Map();
                    this.nextId = 0;
                }
                register(c) {
                    if (this.componentIds.has(c)) {
                        return this.componentIds.get(c);
                    }
                    let res = this.nextId++;
                    this.componentIds.set(c, res);
                    return res;
                }
                getId(c) {
                    return this.componentIds.get(c);
                }
            };
            exports_1("ComponentRegistry", ComponentRegistry);
        }
    };
});
System.register("Entity", [], function (exports_2, context_2) {
    "use strict";
    var Entity;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            Entity = class Entity {
                constructor(componentRegistry, id) {
                    this.components = new Map();
                    this.id = id;
                    this.componentRegistry = componentRegistry;
                }
                getComponent(c) {
                    let cid = this.componentRegistry.getId(c);
                    return this.components.get(cid);
                }
                deleteComponent(...components) {
                    for (let component of components) {
                        let cid = this.componentRegistry.getId(component);
                        this.components.delete(cid);
                    }
                }
                addComponent(...components) {
                    for (let component of components) {
                        let componentId = this.componentRegistry.register(component.constructor);
                        this.components.set(componentId, component);
                    }
                }
            };
            exports_2("Entity", Entity);
        }
    };
});
System.register("EntityManager", ["ComponentRegistry", "Entity"], function (exports_3, context_3) {
    "use strict";
    var ComponentRegistry_1, Entity_1, EntityManager;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (ComponentRegistry_1_1) {
                ComponentRegistry_1 = ComponentRegistry_1_1;
            },
            function (Entity_1_1) {
                Entity_1 = Entity_1_1;
            }
        ],
        execute: function () {
            EntityManager = class EntityManager {
                constructor() {
                    this.nextId = 0;
                    this.entities = [];
                    this.componentRegistry = new ComponentRegistry_1.ComponentRegistry();
                }
                getNextId() {
                    return this.nextId++;
                }
                createEntity(...components) {
                    let entity = new Entity_1.Entity(this.componentRegistry, this.getNextId());
                    entity.addComponent(...components);
                    this.entities.push(entity);
                    return entity;
                }
                deleteEntity(entity) {
                    let index = this.entities.findIndex((otherEntity) => otherEntity.id === entity.id);
                    if (index != -1) {
                        this.entities.splice(index, 1);
                    }
                }
                *getEntities(...components) {
                    if (components.length === 0) {
                        for (let e of this.entities) {
                            yield e;
                        }
                    }
                    else {
                        for (let entity of this.entities) {
                            let hasAllComponents = true;
                            for (let componentType of components) {
                                hasAllComponents =
                                    hasAllComponents && entity.getComponent(componentType);
                            }
                            if (hasAllComponents) {
                                yield entity;
                            }
                        }
                    }
                }
                get length() {
                    return this.entities.length;
                }
                *[Symbol.iterator]() {
                    for (let e of this.entities) {
                        yield e;
                    }
                }
            };
            exports_3("EntityManager", EntityManager);
        }
    };
});
