export class Entity {
  /**
   * Readonly identify number of the entity.
   */
  readonly id: number;

  /**
   * Internal map from component ids (usually fetched from a ComponentRegistry) to the associated
   * component instances of this entity
   */
  private components: Map<ComponentConstructor, ComponentInstance> = new Map();

  constructor(id: number) {
    this.id = id;
  }

  /**
   * Get the component instance of a specific ComponentConstructor type
   * @param c ComponentConstructor type to get a instance for
   * @returns {object | undefined} A object instance of ComponentConstructor type iff the Entity has
   * a component of the ComponentConstructor type or undefined otherwise.
   */
  getComponent<T>(c: ComponentConstructor<T>): T | undefined {
    return this.components.get(c) as T;
  }

  /**
   * Delete one or more components that is associated with this Entity.
   * @param components A variadic list of ComponentConstructors to delete from this Entity
   */
  deleteComponent(...components: ComponentConstructor[]) {
    for (let component of components) {
      this.components.delete(component);
    }
  }

  /**
   * Add one or more components to this Entity.
   * @param components A variadic list of ComponentConstructors to add to this Entity
   */
  addComponent(...components: ComponentInstance[]) {
    for (let component of components) {
      this.components.set(
        component.constructor as ComponentConstructor,
        component
      );
    }
  }
}
