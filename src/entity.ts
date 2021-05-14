import { ComponentRegistry } from './componentRegistry';

export class Entity {
  /**
   * Readonly identify number of the entity.
   */
  readonly id: number;

  /**
   * ComponentRegistry associates the component constructor to ids.
   * This is usually a reference parsed to the entity.
   */
  private componentRegistry: ComponentRegistry;

  /**
   * Internal map from component ids (usually fetched from a ComponentRegistry) to the associated
   * component instances of this entity
   */
  private components: Map<number, any> = new Map();

  constructor(componentRegistry: ComponentRegistry, id: number) {
    this.id = id;
    this.componentRegistry = componentRegistry;
  }

  /**
   * Get the component instance of a specific ComponentConstructor type
   * @param c ComponentConstructor type to get a instance for
   * @returns {object | undefined} A object instance of ComponentConstructor type iff the Entity has
   * a component of the ComponentConstructor type or undefined otherwise.
   */
  getComponent<T>(c: ComponentConstructor<T>): T | undefined {
    let cid = this.componentRegistry.getId(c);
    return this.components.get(cid as number);
  }

  /**
   * Delete one or more components that is associated with this Entity.
   * @param components A variadic list of ComponentConstructors to delete from this Entity
   */
  deleteComponent(...components: ComponentConstructor[]) {
    for (let component of components) {
      let cid = this.componentRegistry.getId(component);
      this.components.delete(cid as number);
    }
  }

  /**
   * Add one or more components to this Entity.
   * @param components A variadic list of ComponentConstructors to add to this Entity
   */
  addComponent(...components: ComponentInstance[]) {
    for (let component of components) {
      let componentId = this.componentRegistry.register(
        component.constructor as ComponentConstructor
      );
      this.components.set(componentId, component);
    }
  }
}
