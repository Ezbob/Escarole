import { ComponentRegistry } from './componentRegistry';
import { Entity } from './entity';

export class EntityManager {
  /**
   * Entity id cache
   */
  private nextId: number = 0;

  /**
   * Internal pool of entities
   */
  private entities: Entity[] = [];

  /**
   * An instance of ComponentRegistry. Associates the component constructors with component ids, which
   * are used in entities queries.
   */
  private componentRegistry: ComponentRegistry = new ComponentRegistry();

  /**
   * Generates an id number for identifying entities
   * @returns {number} The next entity id
   */
  private getNextId(): number {
    return this.nextId++;
  }

  /**
   * Creates and places an entity in this EntityManager, given the supplied component instances.
   * @remark The component instances need to have an named constructor associated with them.
   * @param components A variadic argument list of component instances to be associated with the new
   * Entity
   * @returns {Entity} the newly created entity
   */
  public createEntity(...components: ComponentInstance[]) {
    let entity = new Entity(this.componentRegistry, this.getNextId());
    entity.addComponent(...components);
    this.entities.push(entity);
    return entity;
  }

  /**
   * Deletes the supplied entity from the EntityManager array pool.
   * @param entity Entity to be deleted
   */
  public deleteEntity(entity: Entity) {
    let index = this.entities.findIndex(
      otherEntity => otherEntity.id === entity.id
    );
    if (index !== -1) {
      this.entities.splice(index, 1);
    }
  }

  /**
   * Get an Entity iterator over a subset of the entities, that has the parsed component types, or
   * an Entity iterator over all entities, if no component types are supplied.
   * @param components A set of component constructor to filter for
   * @returns {Generator<Entity>} An iteratable object instance over the entities
   */
  public *getEntities(...components: ComponentConstructor[]) {
    if (components.length === 0) {
      for (let e of this.entities) {
        yield e;
      }
    } else {
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

  /**
   * Get the number of entities in this EntityManager
   */
  get length() {
    return this.entities.length;
  }

  /**
   * Iterate over all the entities of this EntityManager
   */
  *[Symbol.iterator](): IterableIterator<Entity> {
    for (let e of this.entities) {
      yield e;
    }
  }
}
