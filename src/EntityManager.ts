
import { ComponentRegistry } from './ComponentRegistry';
import { Entity } from './Entity';

export class EntityManager {
  private nextId: number = 0;
  private entities: Entity[] = []
  private componentRegistry: ComponentRegistry = new ComponentRegistry()

  private getNextId(): number {
    return this.nextId++;
  }

  public createEntity(...components: ComponentInstance[]) {
    let entity = new Entity(this.componentRegistry, this.getNextId());
    entity.addComponent(...components)
    this.entities.push(entity);
    return entity;
  }

  public deleteEntity(entity: Entity) {
    let index = this.entities.findIndex(otherEntity => otherEntity.id === entity.id);
    if (index != -1) {
      this.entities.splice(index, 1);
    }
  }

  public *getEntities(...components: ComponentConstructor[]) {
    if (components.length === 0) {
      for (let e of this.entities) {
        yield e
      }
    } else {
      for (let entity of this.entities) {
        let hasAllComponents = true
        for (let componentType of components) {
          hasAllComponents = hasAllComponents && entity.getComponent(componentType)
        }
        if (hasAllComponents) {
          yield entity
        }
      }
    }
  }

  get length() {
    return this.entities.length
  }

  *[Symbol.iterator](): Generator<Entity> {
    for (let e of this.entities) {
      yield e
    }
  }
}
